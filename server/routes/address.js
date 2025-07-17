const express = require("express");
const router = express.Router();
const Address = require("../models/address");

router.post("/save-address", async (req, res) => {
  try {
    console.log("Received address:", req.body);
    const newAddress = new Address(req.body);
    const savedAddress = await newAddress.save();
    res.status(201).json({ success: true, data: savedAddress });
  } catch (err) {
    console.error("Error saving address:", err);
    res.status(500).json({ success: false, error: "Failed to save address." });
  }
});

module.exports = router;
