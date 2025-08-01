const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const productRoutes = require("./routes/products");
const mpesaRoutes = require("./routes/mpesaRoutes");
const addressRoutes = require("./routes/address");
const emailSend = require("./routes/email");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/mpesa", mpesaRoutes);
app.use("/api", addressRoutes);
app.use("/send-email", emailSend);
app.use("/api/products", productRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}...`);
});
