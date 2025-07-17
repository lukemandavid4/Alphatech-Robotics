const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const mpesaRoutes = require("./routes/mpesaRoutes"); // Adjust if the path differs
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Optional: Only if frontend is on a different origin
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB (if you're saving orders later)
connectDB();

// Routes
app.use("/api/mpesa", mpesaRoutes); // e.g. POST /api/mpesa/stk-push

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}...`);
});
