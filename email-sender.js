const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password"
  }
});

const mailOptions = {
  from: "your_email@gmail.com",
  to: "your_email@gmail.com",
  subject: "Hello Node.js",
  text: "This email was sent using Node.js and Nodemailer."
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

