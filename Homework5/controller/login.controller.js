const loginService = require('../service/login.service');
const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    getUserByEmail: async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await loginService.getUserByEmail(email, password);
            res.json(user);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
}
