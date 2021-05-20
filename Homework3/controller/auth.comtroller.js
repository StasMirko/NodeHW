const authService = require('../service/auth.service');

module.exports = {
    createUser: (req, res) => {
        authService.createUser(req.body);
        res.status(201).json('User is created');
    }
};
