const Router = require('express');
const router = new Router();
const userController = require('../controllers/comicController');
router.post('/', userController.create);
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);

module.exports = router;
