const userService = require('../service/user.service');

module.exports = {
    getAllUsers: (req, res) => {
        try {
            const users = userService.findUsers();
            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getSingleUser: (req, res) => {
        try {
            const {userId} = req.params;
            const user = userService.findUserById(userId);
            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
