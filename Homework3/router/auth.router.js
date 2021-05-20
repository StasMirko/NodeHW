const router = require('express').Router();

const authController = require('../controller/auth.comtroller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware, authController.createUser);

module.exports = router;
