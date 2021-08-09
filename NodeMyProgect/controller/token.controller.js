const tokenService = require('../service/token.service');
const userService = require('../service/user.service');
const ErrorHandler = require('../error/ErrorHandler');
const {tokinizer, checkHashPassword} = require('../helpers');
const requestHeaders = require('../constant/requestHeaders.enum');
const errorMessages = require('../error/error.messages');
const errorCodes = require('../constant/errorCodes.enum');

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
        const access_token = req.get(requestHeaders.AUTHORIZATION);

        await tokenService.deleteTokensByParams({access_token});

        res.sendStatus(200);
    },

    refreshToken: async (req, res, next) => {
       try {
           const refresh_token = req.get(requestHeaders.AUTHORIZATION);

           const userId = req.userId;

           const user = await userService.findUserById(userId);

           if (!user){
               return next(new ErrorHandler(errorMessages.NOT_FOUND, errorCodes.NOT_FOUND, 4041))
           }

           const tokens = tokinizer()

           await tokenService.deleteTokensByParams({refresh_token});
           await tokenService.createTokenPair(tokens);
           res.json(tokens);
       } catch (e) {
           next(e);
       }

    }
}
