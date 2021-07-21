const loginService = require('../service/login.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');


module.exports = {
    isUser: async (req, res, next) => {
        try {
            const {email, password, preferL = 'en'} = req.body;
            const user = await loginService.getUserByEmail(email, password);
            if (!user) {
                throw new Error(errorMessages.SUCH_USER_DOES_NOT_EXIST[preferL]);
            }
            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
}
