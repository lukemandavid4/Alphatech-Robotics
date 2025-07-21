const express = require("express");
const multer = require("multer");
const { storage } = require("../utils/cloudinary");
const Product = require("../models/product");

const upload = multer({ storage });

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const product = new Product({
      name,
      price,
      description,
      imageUrl: req.file.path, // Cloudinary URL
    });

    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Upload failed" });
  }
});

module.exports = router;
