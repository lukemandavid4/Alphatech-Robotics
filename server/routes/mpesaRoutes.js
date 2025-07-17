const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const Transaction = require("../models/transaction");

dotenv.config();
const router = express.Router();

// Helper: Format timestamp as YYYYMMDDHHmmss
const getTimestamp = () => {
  const date = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(
    date.getDate()
  )}${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
};

// Helper: Generate base64 password
const getPassword = (timestamp) => {
  const shortCode = process.env.BUSINESS_SHORT_CODE;
  const passKey = process.env.PASS_KEY;
  return Buffer.from(`${shortCode}${passKey}${timestamp}`).toString("base64");
};

// Get OAuth token
const getAccessToken = async () => {
  try {
    const url =
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const auth = Buffer.from(
      `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
    ).toString("base64");

    const response = await axios.get(url, {
      headers: { Authorization: `Basic ${auth}` },
    });

    return response.data.access_token;
  } catch (error) {
    console.error(
      "🔴 Access token error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// STK Push Endpoint
router.post("/stk-push", async (req, res) => {
  try {
    const { phoneNumber, amount, accountReference, transactionDesc } = req.body;

    if (!phoneNumber || !amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        error: "Valid phone number and amount required.",
      });
    }

    // Format phone
    let formattedPhone = phoneNumber;
    if (phoneNumber.startsWith("0")) formattedPhone = `254${phoneNumber.slice(1)}`;
    else if (phoneNumber.startsWith("+254")) formattedPhone = phoneNumber.slice(1);
    else if (!phoneNumber.startsWith("254")) {
      return res.status(400).json({
        success: false,
        error: "Phone must start with 07, +254 or 254.",
      });
    }

    const accessToken = await getAccessToken();
    const timestamp = getTimestamp();
    const password = getPassword(timestamp);

    const data = {
      BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: formattedPhone,
      PartyB: process.env.BUSINESS_SHORT_CODE,
      PhoneNumber: formattedPhone,
      CallBackURL: process.env.CALLBACK_URL,
      AccountReference: accountReference || "AlphaTech & Robotics",
      TransactionDesc: transactionDesc || "E-Commerce Payment",
    };

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Save initial transaction
    await Transaction.create({
      phoneNumber: formattedPhone,
      amount,
      accountReference,
      transactionDesc,
      merchantRequestID: response.data.MerchantRequestID,
      checkoutRequestID: response.data.CheckoutRequestID,
      resultCode: null, // not paid yet
      resultDesc: "Waiting for user input",
    });

    return res.json({
      success: true,
      message: "STK Push sent. Check your phone to complete payment.",
      data: response.data,
    });
  } catch (error) {
    console.error("🔴 STK Push error:", error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      message: "STK Push failed",
      error: error.response?.data || error.message,
    });
  }
});

// Callback Handler
router.post("/callback", async (req, res) => {
  res.json({ ResultCode: 0, ResultDesc: "Accepted" });

  const callbackData = req.body?.Body?.stkCallback;
  if (!callbackData) {
    console.error("⚠️ Callback format invalid:", req.body);
    return;
  }

  try {
    const { ResultCode, ResultDesc, CheckoutRequestID, CallbackMetadata } =
      callbackData;

    const metadata = CallbackMetadata?.Item || [];
    const transaction = {};
    metadata.forEach((item) => {
      transaction[item.Name] = item.Value;
    });

    // Update transaction in DB based on result
    const update = {
      resultCode: ResultCode,
      resultDesc: ResultDesc,
      ...(ResultCode === 0
        ? {
            receiptNumber: transaction.MpesaReceiptNumber,
            transactionDate: transaction.TransactionDate,
            mpesaPhoneNumber: transaction.PhoneNumber,
          }
        : {}),
    };

    await Transaction.findOneAndUpdate(
      { checkoutRequestID: CheckoutRequestID },
      update,
      { new: true }
    );

    if (ResultCode === 0) {
      console.log("✅ Payment successful:", transaction);
    } else {
      console.warn("❌ Payment failed or cancelled:", ResultDesc);
    }
  } catch (err) {
    console.error("🔴 Error handling callback:", err);
  }
});

// ✅ Add this endpoint to let frontend poll for status
router.get("/payment-status", async (req, res) => {
  const { checkoutRequestID } = req.query;
  if (!checkoutRequestID)
    return res.status(400).json({ success: false, error: "Missing ID" });

  try {
    const txn = await Transaction.findOne({ checkoutRequestID });
    if (!txn) return res.status(404).json({ success: false, error: "Not found" });

    return res.json({
      success: true,
      status:
        txn.resultCode === 0
          ? "Paid"
          : txn.resultCode === null
          ? "Pending"
          : "Failed",
      resultCode: txn.resultCode,
      resultDesc: txn.resultDesc,
    });
  } catch (err) {
    console.error("🔴 Error fetching payment status:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
