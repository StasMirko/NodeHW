const Joi = require('joi');
const userValidationSchema = require('../validators/user/new-user.validator');
const ErrorHandler = require('../error/ErrorHandler');

const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

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
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
}
};
