// require in express and initialize it
const express = require('express');
const app = express();

// pull in random JS utitlity functions
const {
	getElementById,
	getIndexById,
	updateElement,
	seedElements,
	createElement,
} = require('./_utility-functions/utils');

// declare port for the server
const PORT = process.env.PORT || 4001;
/* 
Use static server to serve the Express Yourself Website
express.static tells express to serve static 
assets from specified directory. It can take an optional
parameter that is an object holding options for how
to serve the assests.
*/
app.use(express.static('public'));

// create an array to hold sample data
const expressions = [];
seedElements(expressions, 'expressions');

// Request paths can use all sorts of options
/*
Basic paths
	'/abc' matches ALL paths that start with it
Path Patterns
	'/ab?c' matches ALL paths that start with '/ab' OR '/abc'
	'/ab+c' matches ALL paths starting with '/abc', '/abbc', '/abbbbbbbc', etc.
	'/ab*c' matches ALL paths starting with /abc, /abxc, /abFOOc, etc.
	'/a(bc)?d matches paths starting with /ad AND /abcd
Regex
	works like normal regular expressions within the path parameter
Arrays
	works in combination with any other path type.
	['/abc', /\/lmn|\/pqr/] matches paths starting with /abc, /lmn, and /pqr
*/

// GET request. Gets all expressions
app.get('/expressions', (req, res, next) => {
	res.send(expressions);
});

// Get a single expression
/* 
the ':' character tells express to put the following into the req.params object
*/
app.get('/expressions/:id', (req, res, next) => {
	const foundExpression = getElementById(req.params.id, expressions);
	if (foundExpression) {
		res.send(foundExpression);
	} else {
		res.status(404).send();
	}
});

// PUT request. Updates an expression
app.put('/expressions/:id', (req, res, next) => {
	const expressionIndex = getIndexById(req.params.id, expressions);
	if (expressionIndex !== -1) {
		updateElement(req.params.id, req.query, expressions);
		res.send(expressions[expressionIndex]);
	} else {
		res.status(404).send();
	}
});

// POST request. Creates an expression
app.post('/expressions', (req, res, next) => {
	const receivedExpression = createElement('expressions', req.query);
	if (receivedExpression) {
		expressions.push(receivedExpression);
		res.status(201).send(receivedExpression);
	} else {
		res.status(400).send();
	}
});

// DELETE request. Deletes an expression
app.delete('/expressions/:id', (req, res, next) => {
	const expressionIndex = getIndexById(req.params.id, expressions);
	if (expressionIndex !== -1) {
		expressions.splice(expressionIndex, 1);
		res.status(204).send();
	} else {
		res.status(404).send();
	}
});

// Start the server listening on the above defined port.
app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT}`);
});
