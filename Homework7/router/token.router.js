const router = require('express').Router();

const tokenController = require('../controller/token.controller');
const accessTokenMiddleware = require('../middleware/access-token.middleware');
const refreshTokenMiddleware = require('../middleware/refresh-token.middleware');

router.post('/', tokenController.loginUser);
router.post('/logout', accessTokenMiddleware.checkIsAccessTokenValid, tokenController.logoutUser);
router.post('/refresh', refreshTokenMiddleware.checkIsRefreshTokenValid, tokenController.refreshToken);

module.exports = router;
