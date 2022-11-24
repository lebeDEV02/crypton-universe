const { Comic } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
class ComicController {
	async create(req, res) {
		try {
			const { circulation, season, title, release_year } = req.body;
			const { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			const comic = await Comic.create({
				circulation,
				title,
				season,
				release_year,
				img: fileName,
			});
			return res.json(comic);
		} catch (error) {
			next(ApiError.badRequest(error));
		}
	}
	async getAll(req, res) {
		const comicCards = await Comic.findAll();
		return res.json(comicCards);
	}
	async getOne(req, res) {
		const { id } = req.params;
		const comic = await Comic.findOne({
			where: { id },
		});
		return res.json(comic);
	}
}

module.exports = new ComicController();
