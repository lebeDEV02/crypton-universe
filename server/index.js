require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const app = express();
const router = require('./routes/index');
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api', router);
const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}.`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();