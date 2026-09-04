const userEmailTemplate = (name) => {
  return {
    subject: "Thank you for contacting Sangram Nandi",

    text: `
Hi ${name},

Thank you for contacting me through my portfolio.

I have received your message and will get back to you as soon as possible.

Regards,
Sangram Nandi
    `,
  };
};

const ownerEmailTemplate = (name, email, message) => {
  return {
    subject: `New Portfolio Contact - ${name}`,

    text: `
You received a new message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
    `,
  };
};

module.exports = {
  userEmailTemplate,
  ownerEmailTemplate,
};