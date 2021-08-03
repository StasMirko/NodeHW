const Joi = require('joi');
const userValidationSchema = require('../validators/user/new-user.validator');
const ErrorHandler = require('../error/ErrorHandler');

const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');
const authService = require('../service/auth.service');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const user = req.body;

            const {error} = Joi.validate(user, userValidationSchema);

            if (error) {
                return next(new ErrorHandler(error.details[0].message, errorCodes.BAD_REQUEST) )
            }

            // console.log('**********************************');
            // console.log(error.details[0].message);
            // console.log('**********************************');

            next();
        } catch (e) {
            // res.status(errorCodes.BAD_REQUEST).json(e.message);
            next(e);
        }
},

    isUserUnique: async (req, res, next) => {
        try {
            const user = req.body;
            const isEmail = await authService.isEmail(user.email);

            if (isEmail) {
                return next(new ErrorHandler('Such a user already exists', errorCodes.BAD_REQUEST, 40020));
            }

            next();

        } catch (e) {
            next(e);
        }
    }
};
