const db = require('../db');

class TestController {
	async getTest(req, res) {
		const test = await db.query(`SELECT * FROM comic`);
		res.json(test.rows);
	}
}

module.exports = new TestController();
