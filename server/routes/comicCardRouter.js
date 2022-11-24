const Router = require('express');
const router = new Router();
const comicCardController = require('../controllers/comicCardController');
router.post('/', comicCardController.create);
router.get('/', comicCardController.getAll);
router.get('/:id', comicCardController.getOne);

module.exports = router;
