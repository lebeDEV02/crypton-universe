const Router = require('express');
const router = new Router();
const comicController = require('../controllers/comicController');
const checkRole = require('../middleware/checkRoleMIddleware');
router.post('/', checkRole('admin'), comicController.create);
router.get('/', comicController.getAll);
router.get('/:id', comicController.getOne);
router.put('/:id', comicController.update);
router.delete('/:id', comicController.deleteComic);
module.exports = router;
