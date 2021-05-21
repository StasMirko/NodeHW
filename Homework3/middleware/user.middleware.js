const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

module.exports = {
    checkIsIdValid: (req, res, next) => {
        try {
            const {preferL = 'en'} = req.body;
            const userId = +req.params.userId;
            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error(errorMessages.NOT_VALID_ID[preferL]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isId: (req, res, next) => {
        try {
            const {preferL = 'en'} = req.body;
            const {userId} = req.params;
            if (userId> userService.dataBaseLength()) {
                throw new Error(errorMessages.NOT_VALID_ID[preferL]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
