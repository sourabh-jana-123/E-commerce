const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  //   const transporter = nodemailer.createTransport({
  //     host: process.env.SMPT_HOST,
  //     port: process.env.SMPT_PORT,
  //     service: process.env.SMPT_SERVICE,
  //     auth: {
  //       user: process.env.SMPT_MAIL,
  //       pass: process.env.SMPT_PASSWORD,
  //     },
  //   });

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e0048043eb6d80",
      pass: "7c23cc585a73bc"
    }
  });

  const mailOptions = {
    // from: "2ddfca30253001",
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
