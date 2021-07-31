const Joi = require('joi');
const updateUserValidationSchema = require('../validators/user/update-user.validator');

const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');
const ErrorHandler = require('../error/ErrorHandler');


module.exports = {
    checkIsIdValid: (req, res, next) => {
        try {
            const {preferL = 'en'} = req.body;
            const userId = +req.params.userId;
            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                return next (new ErrorHandler(errorMessages.NOT_VALID_ID[preferL], errorCodes.BAD_REQUEST, 4041));

                // throw new Error(errorMessages.NOT_VALID_ID[preferL]);
            }

            next();
        } catch (e) {
            next(e);
            // res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isId: async (req, res, next) => {
        try {
            const {preferL = 'en'} = req.body;
            const {userId} = req.params;
            const id = await userService.isUserId(userId);
            if (!id) {
                return next (new ErrorHandler(errorMessages.NOT_VALID_ID[preferL], errorCodes.BAD_REQUEST, 4041));
                // throw new Error(errorMessages.NOT_VALID_ID[preferL]);
            }

            next();
        } catch (e) {
            next(e);
            // res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isUser: async (req, res, next) => {
        try {
            const {email, preferL = 'en'} = req.body;
            const user = await userService.findUserByEmail(email);
            if (!user) {
                return next (new ErrorHandler(errorMessages.SUCH_USER_DOES_NOT_EXIST[preferL], errorCodes.NOT_FOUND, 4041));
            }
            next();
        } catch (e) {
            next(e);
        }
    },
    isUpdateUserValid: (req, res, next) => {
        try {
            const user = req.body;

            const {error} = Joi.validate(user, updateUserValidationSchema);

            if (error) {
                return next(new ErrorHandler(error.details[0].message, errorCodes.BAD_REQUEST));
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
