const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const Transaction = require("../models/transaction"); // ✅ Fix typo here

dotenv.config();
const router = express.Router();

// Helper: Format timestamp as YYYYMMDDHHmmss
const getTimestamp = () => {
  const date = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
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
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const auth = Buffer.from(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`).toString("base64");

    const response = await axios.get(url, {
      headers: { Authorization: `Basic ${auth}` },
    });

    return response.data.access_token;
  } catch (error) {
    console.error("🔴 Access token error:", error.response?.data || error.message);
    throw error;
  }
};

// STK Push Endpoint
router.post("/stk-push", async (req, res) => {
  try {
    const { phoneNumber, amount, accountReference, transactionDesc } = req.body;

    if (!phoneNumber || !amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ success: false, error: "Valid phone number and amount required." });
    }

    // Format phone
    let formattedPhone = phoneNumber;
    if (phoneNumber.startsWith("0")) formattedPhone = `254${phoneNumber.slice(1)}`;
    else if (phoneNumber.startsWith("+254")) formattedPhone = phoneNumber.slice(1);
    else if (!phoneNumber.startsWith("254")) {
      return res.status(400).json({ success: false, error: "Phone must start with 07, +254 or 254." });
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
      AccountReference: accountReference || "Online Purchase",
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

    // Save to DB
    await Transaction.create({
      phoneNumber: formattedPhone,
      amount,
      accountReference,
      transactionDesc,
      merchantRequestID: response.data.MerchantRequestID,
      checkoutRequestID: response.data.CheckoutRequestID,
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

// Callback Handler from Safaricom
router.post("/callback", async (req, res) => {
  res.json({ ResultCode: 0, ResultDesc: "Accepted" }); // Always respond immediately

  const callbackData = req.body?.Body?.stkCallback;
  if (!callbackData) {
    console.error("⚠️ Callback format invalid:", req.body);
    return;
  }

  try {
    const { ResultCode, ResultDesc, CheckoutRequestID, CallbackMetadata } = callbackData;

    const metadata = CallbackMetadata?.Item || [];
    const transaction = {};
    metadata.forEach((item) => {
      transaction[item.Name] = item.Value;
    });

    if (ResultCode === 0) {
      console.log("✅ Payment successful:", transaction);

      await Transaction.findOneAndUpdate(
        { checkoutRequestID: CheckoutRequestID },
        {
          resultCode: ResultCode,
          resultDesc: ResultDesc,
          receiptNumber: transaction.MpesaReceiptNumber,
          transactionDate: transaction.TransactionDate,
          mpesaPhoneNumber: transaction.PhoneNumber,
        },
        { new: true }
      );
    } else {
      console.warn("❌ Payment failed:", ResultDesc);

      await Transaction.findOneAndUpdate(
        { checkoutRequestID: CheckoutRequestID },
        {
          resultCode: ResultCode,
          resultDesc: ResultDesc,
        },
        { new: true }
      );
    }
  } catch (err) {
    console.error("🔴 Error handling callback:", err);
  }
});

module.exports = router;

