const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  amount: { type: Number, required: true },
  accountReference: { type: String },
  transactionDesc: { type: String },
  merchantRequestID: { type: String },
  checkoutRequestID: { type: String },
  resultCode: { type: Number },
  resultDesc: { type: String },
  receiptNumber: { type: String },
  transactionDate: { type: String },
  mpesaPhoneNumber: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
