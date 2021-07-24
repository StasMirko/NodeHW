const authService = require('../service/auth.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

module.exports = {
    createUser: async (req, res) => {
        try {
            const {preferL = 'en'} = req.body;
            await authService.createUser(req.body);
            res.status(errorCodes.CREATED).json(errorMessages.USER_IS_CREATED[preferL]);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
