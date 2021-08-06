const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'stas@gmail.com',
        pass: '12345'
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
