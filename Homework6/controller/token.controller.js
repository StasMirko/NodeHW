const tokenService = require('../service/token.service');
const ErrorHandler = require('../error/ErrorHandler');
const {tokinizer} = require('../helpers');

module.exports = {

    loginUser: async (req, res, next) => {
        const {id} = req.user;

        const tokens = tokinizer();
        await tokenService.createTokenPair(tokens);

        res.json(user);
    }

}
