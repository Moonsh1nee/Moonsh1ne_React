// api/send.js
require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send(error.toString());
    }
};
