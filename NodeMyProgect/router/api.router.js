const router = require('express').Router();

const authRouter = require('./auth.router');
const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const tokenRouter = require('./token.router');

router.use('/auth', authRouter);
router.use('/login', loginRouter);
router.use('/users', userRouter);
router.use('/token', tokenRouter);

module.exports = router;
