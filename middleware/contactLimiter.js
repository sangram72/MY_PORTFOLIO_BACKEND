const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 2,

  message: {
    message: "Too many contact requests. Please try again later.",
  },

  standardHeaders: "draft-7",
  legacyHeaders: false,
});

module.exports = contactLimiter;