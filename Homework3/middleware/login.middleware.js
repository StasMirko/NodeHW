const loginService = require('../service/login.service');

module.exports = {
    isUser: (req, res, next) => {
        try {
            const {email, password} = req.body;
            const user = loginService.getUserByEmail(email, password);
            if (!user) {
                throw new Error('Such user does not exist');
            }
            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
}
