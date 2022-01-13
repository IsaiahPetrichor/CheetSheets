const express = require('express');
const app = express();
// require in a Logging middleware
// install with 'npm install morgan'
const morgan = require('morgan');
// require in body-parser to parse request bodies
// install with 'npm install body-parser'
const bodyParser = require('body-parser');
// require in an error-handling middleware
// install with 'npm install errorhandler'
const errorhandler = require('errorhandler');
// more express middleware on: https://github.com/expressjs

// basic express setup
app.use(express.static('public'));
const PORT = process.env.PORT || 4001;

// simple example data object
const jellybeanBag = {
	mystery: {
		number: 4,
	},
	lemon: {
		number: 5,
	},
	rootBeer: {
		number: 25,
	},
	cherry: {
		number: 3,
	},
	licorice: {
		number: 1,
	},
};

// initialize logging middleware
if (!process.env.IS_TEST_ENV) {
	app.use(morgan('dev'));
}
// initialize parsing middleware
app.use(bodyParser.json());

// you can also create custom middleware, for example:
const timeMiddleware = (req, res, next) => {
	req.date = Date.now();
	next();
};
app.use(timeMiddleware);
// you can now access this to timestamp anything by calling req.date

app.use('/beans/:beanName', (req, res, next) => {
	const beanName = req.params.beanName;
	if (!jellybeanBag[beanName]) {
		return res.status(404).send('Bean with that name does not exist');
	}
	req.bean = jellybeanBag[beanName];
	req.beanName = beanName;
	next();
});

app.get('/beans/', (req, res, next) => {
	res.send(jellybeanBag);
});

app.post('/beans/', (req, res, next) => {
	const body = req.body;
	const beanName = body.name;
	if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
		return res.status(400).send('Bean with that name already exists!');
	}
	const numberOfBeans = Number(body.number) || 0;
	jellybeanBag[beanName] = {
		number: numberOfBeans,
	};
	res.send(jellybeanBag[beanName]);
});

app.get('/beans/:beanName', (req, res, next) => {
	res.send(req.bean);
});

app.post('/beans/:beanName/add', (req, res, next) => {
	const numberOfBeans = Number(req.body.number) || 0;
	req.bean.number += numberOfBeans;
	res.send(req.bean);
});

app.post('/beans/:beanName/remove', (req, res, next) => {
	const numberOfBeans = Number(req.body.number) || 0;
	if (req.bean.number < numberOfBeans) {
		return res.status(400).send('Not enough beans in the jar to remove!');
	}
	req.bean.number -= numberOfBeans;
	res.send(req.bean);
});

app.delete('/beans/:beanName', (req, res, next) => {
	const beanName = req.beanName;
	jellybeanBag[beanName] = null;
	res.status(204).send();
});

// initialize error handling
app.use((err, req, res, next) => {
	errorhandler(err);
});

// start server
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
