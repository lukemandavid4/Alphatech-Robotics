const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  originalPrice: Number,
  description: String,
  category: String,
  brand: String,
  image: String,
  rating: Number,
});

module.exports = mongoose.model("Product", productSchema);
