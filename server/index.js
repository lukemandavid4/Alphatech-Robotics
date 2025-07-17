const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const mpesaRoutes = require("./routes/mpesaRoutes");
const addressRoutes = require("./routes/address");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/mpesa", mpesaRoutes);
app.use("/api", addressRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}...`);
});
