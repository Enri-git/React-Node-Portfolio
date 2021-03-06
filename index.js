const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();


//It is required to read the file .env
require('dotenv').config()


//it parses our form data into json 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//It takes the URL defined in the contacts.js 
app.post('/api/form', (req, res) => {
    const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.Name}</li>
            <li>Email: ${req.body.Email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.Message}</p>
        `;

    //create reusable transporter object using the default Simple Mail Transfer Protocol (SMTP)
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        host: 'smtp.gmail.com',
        port: 587,
        secure: 'false', //true for 465, false for other ports
        auth: {
            user: process.env.APP_USER,
            pass: process.env.APP_PASS
        }
    })

    //setup email data
    let mailOptions = {
        from: ' "Form web-site" <berti.enrica81@gmail.com>', //sender address
        to: 'berti.enrica81@gmail.com', //list of receivers
        subject: 'New Message',
        text: req.body.Message,
        html: htmlEmail,
        // tls: {
        //     rejectUnauthorized: false
        // }
    }

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    //send email with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err)
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

    console.log(req.body)
    res.json({ msg: 'success' })
})


// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.use('*', express.static('client/build'))
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${'PORT'}`);// eslint-disable-line no-console
})

