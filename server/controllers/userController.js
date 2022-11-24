const { User } = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, username, role) => {
	return jwt.sign({ id, username, role }, process.env.SECRET_KEY, {
		expiresIn: '24h',
	});
};

class UserController {
	async registration(req, res, next) {
		const { username, password, role } = req.body;
		const candidate = await User.findOne({ where: { username } });
		if (candidate) {
			return next(ApiError.badRequest('User with such username already exists'));
		}
		const hashPassword = await bcrypt.hash(password, 5);
		const user = await User.create({ username, role, password: hashPassword });
		const token = generateJwt(user.id, username, user.role);
		return res.json({ token });
	}
	async login(req, res, next) {
		const { username, password } = req.body;
		const user = await User.findOne({ where: { username } });
		if (!user) {
			return next(ApiError.interal('Could not find user with this username'));
		}
		let didPasswordsMatch = bcrypt.compareSync(password, user.password);
		if (!didPasswordsMatch) {
			return next(ApiError.interal('Wrong password'));
		}
		const token = generateJwt(user.id, username, user.role);
		return res.json({ token });
	}
	async check(req, res) {
		const token = generateJwt(req.user.id, req.user.email, req.user.role);
		return res.json({ token });
	}
}

module.exports = new UserController();
