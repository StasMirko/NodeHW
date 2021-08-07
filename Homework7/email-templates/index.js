const {USER_REGISTER, USER_FORGOT_PASS} = require('../constant/email-action.enam');

module.exports = {
    [USER_REGISTER]: {
        subject: '[node shop] Welcome',
        templateFileName: 'welcome'
    },
    [USER_FORGOT_PASS]: {
        subject: '[node shop] Forgot pass',
        templateFileName: 'userForgotPass'
    }
}
