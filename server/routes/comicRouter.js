const Router = require('express');
const router = new Router();
const userController = require('../controllers/comicController');
const checkRole = require('../middleware/checkRoleMIddleware');
router.post('/', checkRole('admin'), userController.create);
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);

module.exports = router;
