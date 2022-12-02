const { Comic } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
class ComicController {
	async create(req, res, next) {
		try {
			console.log('REQUEST FILES IS', req.body);
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
			console.log('ERROR', error);
			next(ApiError.badRequest(error));
		}
	}
	async getAll(req, res) {
		const { circulation, season } = req.query;

		console.log('SEASON IS', req.query);
		let comicCards;
		if (circulation && !season) {
			comicCards = await Comic.findAll({ where: { circulation } });
		}
		if (!circulation && season) {
			comicCards = await Comic.findAll({ where: { season } });
		}
		if (circulation && season) {
			comicCards = await Comic.findAll({ where: { season, circulation } });
		}
		if (!circulation && !season) {
			comicCards = await Comic.findAll();
		}
		return res.json(comicCards);
	}
	async getOne(req, res) {
		const { id } = req.params;
		const comic = await Comic.findOne({
			where: { id },
		});
		return res.json(comic);
	}

	async update(req, res) {
		const { id } = req.params;
		const { circulation, season, title, release_year } = req.body;
		let image;
		if (req.files) {
			const { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));
			image = img;
		}
		const updatedComic = await Comic.update(
			{ circulation, season, title, release_year, img: image },
			{ where: { id } },
		);
		return res.json(updatedComic);
	}

	async deleteComic(req, res) {
		const { id } = req.params;

		const deletedComic = await Comic.destroy({ where: { id } });
		return res.json(deletedComic);
	}
}

module.exports = new ComicController();
