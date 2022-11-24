const { ComicCard } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
class ComicCardController {
	async create(req, res, next) {
		try {
			const { price, title, comicId } = req.body;
			const { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			const comicCard = await ComicCard.create({ price, title, comicId, img: fileName });
			return res.json(comicCard);
		} catch (error) {
			next(ApiError.badRequest(error));
		}
	}
	async getAll(req, res) {
		const { comicId } = req.query;
		let comicCards;
		if (!comicId) {
			comicCards = await ComicCard.findAll();
		}
		if (comicId) {
			comicCards = await ComicCard.findAll({ where: { comicId } });
		}
		return res.json(comicCards);
	}
	async getOne(req, res) {
		const { id } = req.params;
		const comicCard = await ComicCard.findOne({
			where: { id },
		});
		return res.json(comicCard);
	}
}

module.exports = new ComicCardController();
