const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();
            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: (req, res) => {
        try {
            const {userId} = req.params;
            const user = userService.findUserById(userId);
            res.json(user);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    deleteUser: (req, res) => {
        try {
            const {preferL = 'en'} = req.body;
            const {userId} = req.params;
            userService.deleteUser(userId);
            res.json(errorMessages.USER_IS_DELETED[preferL]);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
