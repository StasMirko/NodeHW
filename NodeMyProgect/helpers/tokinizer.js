const jwt = require('jsonwebtoken');
const wordsEnum = require('../constant/words');

module.exports = () => {
    const access_token = jwt.sign({}, wordsEnum.JWT_SECRET, {expiresIn: '10m'});
    const refresh_token = jwt.sign({}, wordsEnum.JWT_REFRESH_SECRET, {expiresIn: '1d'});

    return {
        access_token,
        refresh_token
    }
}
