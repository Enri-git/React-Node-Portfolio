const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

//It is required to read the file .env
require('dotenv').config()


//it parses our form data into json 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//It takes the URL defined in the contacts.js 
app.post('/api/form', (req, res) => {
    nodemailer.createTransport((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.Name}</li>
            <li>Email: ${req.body.Email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.Message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            //secure: 'STARTTLS',
            auth: {
                user: process.env.APP_USER,
                pass: process.env.APP_PASS
            }
        })
        console.log(process.env.APP_USER);

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'amya.feil14@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.Message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('Message sent: %s', info.messageId)
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        })

    })
    console.log(req.body)
    res.send('success')

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

