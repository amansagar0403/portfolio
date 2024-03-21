// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS module

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'codeatlas2023@gmail.com',
        pass: 'dbmsproject',
    },
});

app.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body;

    const mailOptions = {
        from: 'codeatlas2023@gmail.com',
        to: 'amansagar0403@gmail.com',
        subject: subject || 'Contact Me',
        text: `From: ${email}\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
