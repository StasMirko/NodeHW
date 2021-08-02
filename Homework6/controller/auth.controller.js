const authService = require('../service/auth.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');
const {hashPassword} = require('../helpers');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const {preferL = 'en'} = req.body;
            const user = req.body;

           const hashedPassword = await hashPassword(user.password);

           user.password = hashedPassword;

            await authService.createUser(user);
            res.status(errorCodes.CREATED).json(errorMessages.USER_IS_CREATED[preferL]);
        } catch (e) {
            // res.status(errorCodes.BAD_REQUEST).json(e.message);
            next(e);
        }
    }
};
