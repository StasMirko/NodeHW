const authService = require('../service/auth.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');
const {hashPassword} = require('../helpers');
const emailService = require('../service/email.service');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const {preferL = 'en'} = req.body;
            const user = req.body;

           const hashedPassword = await hashPassword(user.password);

           user.password = hashedPassword;

            await authService.createUser(user);

            emailService.sendMail(user.email).catch(() => {});

            res.json(user);
        } catch (e) {
            next(e);
        }
    }
};
