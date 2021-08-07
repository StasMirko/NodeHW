const nodemailer = require('nodemailer');
const {ROOT_EMAIL_SERVICE, ROOT_EMAIL, ROOT_EMAIL_PASSWORD} = require('../config')

const transporter = nodemailer.createTransport({
    service: ROOT_EMAIL_SERVICE,
    auth: {
        user: ROOT_EMAIL,
        pass: ROOT_EMAIL_PASSWORD
    }
})

class EmailService{
    sendMail(userMail){
        const mailOptions = {
        from: 'No reply Oktenweb',
        to: userMail,
        subject: 'Hello world',
        html: '<h1>Test</h1>'
    };

        return transporter.sendMail(mailOptions)
    }
}

module.exports = new EmailService();
