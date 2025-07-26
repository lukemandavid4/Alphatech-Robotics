const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Configure your transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,       // your email
        pass: process.env.EMAIL_PASSWORD,   // your app password
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `[Contact Form] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
});

module.exports = router;