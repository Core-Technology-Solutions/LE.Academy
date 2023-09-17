const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the 'cors' module
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const courseRouter = require('./routes/courseRouter');
const userRouter = require('./routes/userRouter');
const contactRouter = require('./routes/contactRouter');
const server = express();

// Enable CORS for all routes (you can configure this as needed)
server.use(bodyParser.json());
server.use(cors());

server.post('/send-email', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info@cts-egy.com', // Replace with your email address
            pass: 'Cm67<7qhq' // Replace with your email password
        }
    });

    const mailOptions = {
        from: 'lamiaaselim1896@gmail.com',
        to: 'info@cts-egy.com', // Replace with recipient email address
        subject: 'LE Academy Form Submission',
        text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
    `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

const port = process.env.PORT || 8080;

mongoose.connect("mongodb://127.0.0.1:27017/LE-Academy")
    .then(() => {
        console.log("DB connection established")
        server.listen(port, () => {
            console.log("I'm listening ..")
        });
    })
    .catch((error) => {
        console.log("connection error" + error)
    });
/* -----------------Server layer ----------------- */
// First Mw loading -- login
server.use((request, response, next) => {
    console.log(request.url, request.method);
    // response.status(200).json({message: "Hello, from first Mw loading -- login"});
    next();
});
/* -----------------Routes ----------------- */
server.use(express.json());

server.use(courseRouter);
server.use(userRouter);
server.use(contactRouter);

// Second Mw loading -- authentication
server.use((request, response, next) => {
    console.log("Second Mw loading -- authentication");
    next();
    // next(new Error("Second Mw throw exception error -- not authenticated"));// jumb to error middleware
});

// 3 Mw loading -- NotFound
server.use((request, response, next) => {
    response.status(404).json({ message: "3 Mw loading -- Page not found" });
    next();
});

// 4 Mw loading -- Error
server.use((error, request, response, next) => {
    response.status(500).json({ message: "4 Mw loading -- Error" + error });
    next();
});