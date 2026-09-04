const transporter = require("../config/email");

const {
  userEmailTemplate,
  ownerEmailTemplate,
} = require("../utils/emailTemplates");

const sendContactMessage = (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Name, email and message are required.",
    });
  }

  // Respond immediately
  res.status(200).json({
    message: "Message received successfully.",
  });

  // Email to user
  const userEmail = userEmailTemplate(name);

  // Email to owner
  const ownerEmail = ownerEmailTemplate(
    name,
    email,
    message
  );

  // Send emails in background
  Promise.all([
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: userEmail.subject,
      text: userEmail.text,
    }),

    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      replyTo: email,
      subject: ownerEmail.subject,
      text: ownerEmail.text,
    }),
  ])
    .then(() => {
      console.log("Both emails sent successfully.");
    })
    .catch((error) => {
      console.error(
        "Background email error:",
        error.message
      );
    });
};

module.exports = {
  sendContactMessage,
};