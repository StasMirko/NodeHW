const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const {email, password, preferL = 'en'} = req.body;
            if (!email || !password) {
                throw new Error(errorMessages.SOME_FILED_IS_EMPTY[preferL]);
            }

            if (password.length < 5) {
                throw new Error(errorMessages.TOO_WEAK_PASSWORD[preferL]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
}
};
