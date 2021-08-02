const router = require('express').Router();

const tokenController = require('../controller/token.controller');
// const loginMiddleware = require('../middleware/login.middleware');

router.post('/', tokenController.loginUser);

module.exports = router;
