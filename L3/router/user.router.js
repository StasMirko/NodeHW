const  router = require('express').Router();

const userController = require('../controller/user.controller');

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getSingleUser);

router.post('/', userController.createUser);

module.exports = router;
