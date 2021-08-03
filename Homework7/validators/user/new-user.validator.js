const Joi = require('joi');
const regexEnum = require('../../constant/regex.enum')

module.exports = Joi.object().keys({
    // name: Joi.string().trim().min(2).max(60),
    email: Joi.string().regex(regexEnum.EMAIL).required(),
    password: Joi.string().trim().min(5).required(),
    preferL: Joi.string().trim().min(2).max(2)
})

