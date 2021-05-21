const loginService = require('../service/login.service');

module.exports = {
    getUserByEmail: (req, res) => {
        try {
            const {email, password} = req.body;
            const user = loginService.getUserByEmail(email, password);
            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
}
