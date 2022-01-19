const { Pool, Client } = require('pg');
const secret = require('./secret.json');

const pool = new Pool(secret);

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
	console.error('Unexpected error on idle client', err);
	process.exit(-1);
});

// simple queries using pool
pool.query('SELECT * FROM films', (err, res) => {
	if (err) {
		console.log(err.stack);
	} else {
		console.log(res.rows);
	}
	pool.end();
});
