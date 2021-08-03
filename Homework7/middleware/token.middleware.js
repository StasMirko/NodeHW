const jwt = require('jsonwebtoken');
const wordsEnum = require('../constant/words');
const ErrorHandler = require('../error/ErrorHandler');
const tokenService = require('../service/token.service');

module.exports = {
    checkIsTokenValid: async (req, res, next) => {

        try {

            const token = req.get('Authorization');

            if (!token) {
                throw new ErrorHandler('No token', 400, 4002);
            }

            jwt.verify(token, wordsEnum.JWT_SECRET, {}, err => {
                if (err) {
                    return next(new ErrorHandler('Not valid token', 401, 4011));
                }
            });

            const tokensFromDB = await tokenService.getTokensByParams({access_token: token});

            if (!tokensFromDB) {
                return next(new ErrorHandler('Not valid token', 401, 4011));
            }

            req.userId = tokensFromDB.userId;

            next();
        } catch (e) {
            next(e);
        }
    }
}
