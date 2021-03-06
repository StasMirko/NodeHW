const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);
router.patch('/', userController.updateUser);
router.get('/:userId', userMiddleware.checkIsIdValid, userController.getSingleUser);
router.delete('/:userId',userMiddleware.checkIsIdValid, userMiddleware.isId, userController.deleteUser);

module.exports = router;
