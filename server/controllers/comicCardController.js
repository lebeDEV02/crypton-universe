const { ComicCard } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
class ComicCardController {
	async create(req, res, next) {
		try {
			const { price, title } = req.body;
			const { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			const comicCard = await ComicCard.create({ price, title, img: fileName });
			return res.json(comicCard);
		} catch (error) {
			next(ApiError.badRequest(error));
		}
	}
	async getAll(req, res) {
		const comicCards = await ComicCard.findAll();
		return res.json(comicCards);
	}
	async getOne(req, res) {}
}

module.exports = new ComicCardController();
