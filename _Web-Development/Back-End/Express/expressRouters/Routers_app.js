const express = require('express');
const app = express();

// declare port and serve files statically from the 'public' folder
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));

// Import and mount the expressionsRouter
const expressionsRouter = require('./Route_expressions.js');
app.use('/expressions', expressionsRouter);

// Import and mount the animalsRouter
const animalsRouter = require('./Route_animals.js');
app.use('/animals', animalsRouter);

// start server
app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT}`);
});
