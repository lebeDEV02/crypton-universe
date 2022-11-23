const Router = require('express');
const router = new Router();
const comicRouter = require('./comicRouter');
const comicCardRouter = require('./comicCardRouter');
const userRouter = require('./userRouter');
router.use('/comic', comicRouter);
router.use('/comic-card', comicCardRouter);
router.use('/user', userRouter);

module.exports = router;
