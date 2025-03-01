const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5001; // Backend port

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

// Endpoint to handle form submissions
app.post("/submit-form", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).send("All fields are required.");
  }

  // Email content
  const mailOptions = {
    from: "1279276434@qq.com", // Sender address (your QQ email)
    to: "hrvictor2020@gmail.com", // Recipient address (your QQ email)
    subject: `New Form Submission from ${name}`, // Email subject
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email.");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Form submitted successfully!");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
