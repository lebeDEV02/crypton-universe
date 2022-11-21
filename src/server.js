const express = require('express');
const userRouter = require('./routes/test.route');

const app = express();

const PORT = process.env.PORT || 8080;

app.use('/api', userRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
