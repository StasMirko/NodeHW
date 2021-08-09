const loginService = require('../service/login.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');
const ErrorHandler = require('../error/ErrorHandler');


module.exports = {
    isUser: async (req, res, next) => {
        try {
            const {email, preferL = 'en'} = req.body;
            const user = await loginService.getUserByEmail(email);
            if (!user) {
                 return next (new ErrorHandler(errorMessages.SUCH_USER_DOES_NOT_EXIST[preferL], errorCodes.NOT_FOUND, 4041));
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}
