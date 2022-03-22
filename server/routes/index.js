const express = require('express').Router();
const authRouter = require('./auth')
const userRouter = require('./user')
const postRouter = require('./post')
const commentRouter = require('./comment');
const router = require('./auth');

router.use('/auth', authRouter);
router.use('/users', userRouter)
router.use('/post', postRouter);
// router.use('/comment', commentRouter);


module.exports = router;