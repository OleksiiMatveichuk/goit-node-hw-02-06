const nodemailer = require("nodemailer");

const { PASSWORD_GMAIL } = process.env;

const nodemailerConfig = {
  service: "gmail",
  auth: {
    user: "oleksii.matveichuk@gmail.com",
    pass: PASSWORD_GMAIL,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "oleksii.matveichuk@gmail.com" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
