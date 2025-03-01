const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Configure Nodemailer with QQ's SMTP settings
const transporter = nodemailer.createTransport({
  host: "smtp.qq.com", // QQ's SMTP host
  port: 465, // Use 465 for SSL or 587 for TLS
  secure: true, // true for 465, false for other ports
  auth: {
    user: "1279276434@qq.com", // Your QQ email address
    pass: "wuzgpilnqpdkhhfa", // The authorization code from QQ
  },
});

app.post("/api/submit-form", async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone)
    return res.status(400).send("All fields are required.");
  try {
    await transporter.sendMail({
      from: "1279276434@qq.com",
      to: "bruce@unilinkletting.co.uk",
      subject: `New Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    res.status(200).send("Form submitted successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

module.exports = app;
