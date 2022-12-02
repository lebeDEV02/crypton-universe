require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const sequelize = require('./db');
const app = express();
const path = require('path');
const router = require('./routes/index');
const models = require('./models/models');
const PORT = process.env.PORT || 8080;
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);
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
