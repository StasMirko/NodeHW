const Joi = require('joi');
const regexEnum = require('../../constant/regex.enum')

module.exports = Joi.object().keys({
    // email: Joi.string().regex(regexEnum.EMAIL).required(),
    password: Joi.string().trim().min(5).required(),
    // newEmail: Joi.string().regex(regexEnum.EMAIL).required(),
    // newPassword: Joi.string().trim().min(5).required()
})
