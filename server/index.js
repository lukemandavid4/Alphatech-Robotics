const express = require("express");
const connectDB = require("./config/config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});