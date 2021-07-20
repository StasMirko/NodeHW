const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

module.exports = {
    checkIsIdValid: async (req, res, next) => {
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

    isId: async (req, res, next) => {
        try {
            const {preferL = 'en'} = req.body;
            const {userId} = req.params;
            const id = await userService.dataBaseIsId(userId);
            if (!id) {
                throw new Error(errorMessages.NOT_VALID_ID[preferL]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
