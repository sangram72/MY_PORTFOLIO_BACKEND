const express = require("express");

const {
  sendContactMessage,
} = require("../controllers/contactController");

const contactLimiter = require("../middleware/contactLimiter");

const router = express.Router();

router.post(
  "/contact",
  contactLimiter,
  sendContactMessage
);

module.exports = router;