const userService = require('../service/user.service');
// const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');
const {checkHashPassword} = require('../helpers');
const {hashPassword} = require('../helpers');


module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.findUsers();
            res.json(users);
        } catch (e) {
            next(e);
            // res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const user = await userService.findUserById(userId);
            res.json(user);
        } catch (e) {
            next(e);
            // res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const {preferL = 'en'} = req.body;
            const {userId} = req.params;
            await userService.deleteUser(userId);
            res.json(errorMessages.USER_IS_DELETED[preferL]);
        } catch (e) {
            next(e);
            // res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const {preferL = 'en'} = req.body;
            const {email, password, newEmail, newPassword} = req.body;

            const user = userService.findUserByEmail(email);
            await checkHashPassword(user.password, password);

            const hashedPassword = await hashPassword(newPassword);


            await userService.updateUser(email, user.password, newEmail, hashedPassword);
            res.json('User is update')
        } catch (e) {
            next(e);
            // res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
