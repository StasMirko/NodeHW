const router = require('express').Router();

const tokenController = require('../controller/token.controller');
const tokenMiddleware = require('../middleware/token.middleware');

router.post('/', tokenController.loginUser);
router.post('/logout', tokenMiddleware.checkIsTokenValid, tokenController.logoutUser);
// router.post('/refresh', tokenMiddleware.checkIsTokenValid, tokenController.logoutUser);

module.exports = router;
