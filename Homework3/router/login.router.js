const router = require('express').Router();

const loginController = require('../controller/login.controller');
const loginMiddleware = require('../middleware/login.middleware');

router.get('/', loginMiddleware.isUser, loginController.getUserByEmail);

module.exports = router;
