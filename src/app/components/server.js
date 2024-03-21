const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS module

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors({ origin: 'https://amansagar.vercel.app/' })); // Allow requests from localhost:3000 (replace with your React app's domain)

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'codeatlas2023@gmail.com',
        pass: 'dbmsproject',
    },
});

app.post('/send-email', async (req, res) => {
    try {
        const { email, subject, message } = req.body;

        // Basic validation (replace with more comprehensive checks)
        if (!email || !subject || !message) {
            throw new Error('Please fill in all required fields.');
        }

        const mailOptions = {
            from: 'codeatlas2023@gmail.com',
            to: 'amansagar0403@gmail.com', // Replace with recipient's email
            subject: subject || 'Contact Me',
            text: `From: ${email}\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
