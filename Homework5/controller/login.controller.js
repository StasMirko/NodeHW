const loginService = require('../service/login.service');
const errorCodes = require('../constant/errorCodes.enum');
const {checkHashPassword} = require('../helpers');

module.exports = {
    getUserByEmail: async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await loginService.getUserByEmail(email);

            await checkHashPassword(user.password, password);

            res.json(user);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
}
