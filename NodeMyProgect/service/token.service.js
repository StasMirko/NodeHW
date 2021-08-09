const db = require('../dataBase').getInstance();

module.exports = {

    createTokenPair: (tokens) => {
        const TokenModel = db.getModel('Token');
        return TokenModel.create(tokens);
    },

    getTokensByParams: (params) => {
        const TokenModel = db.getModel('Token');
        return TokenModel.findOne({
            where: params
        })
    },

    deleteTokensByParams: (params) => {
        const TokenModel = db.getModel('Token');
        return TokenModel.destroy({
            where: params
        })
    }
}
