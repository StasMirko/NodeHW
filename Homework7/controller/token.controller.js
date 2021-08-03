const tokenService = require('../service/token.service');
const userService = require('../service/user.service');
const ErrorHandler = require('../error/ErrorHandler');
const {tokinizer, checkHashPassword} = require('../helpers');

module.exports = {

    loginUser: async (req, res, next) => {

        try {

            const {email, password} = req.body
            const user = await userService.findUserByEmail(email);

            if (!user) {
                next(new ErrorHandler('no user', 404, 4041));
            }

            await checkHashPassword(user.password, password);

            const tokens = tokinizer();
            await tokenService.createTokenPair({...tokens, userId: user.id});

            res.json(tokens);

        } catch (e) {
            next(e);
        }
    },

    logoutUser: async (req, res) => {
        const access_token = req.get('Authorization');

        await tokenService.deleteTokensByParams({access_token});

        res.sendStatus(200);
    }
}
