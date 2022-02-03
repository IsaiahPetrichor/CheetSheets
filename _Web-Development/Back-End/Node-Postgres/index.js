// import node-postgres
import pg from 'pg';
// destructure after import because node-postgres does not like ES6 modules...
const { Pool } = pg;
// import dotenv to use instead of revealing credentials
import dotenv from 'dotenv';
// dotenv requires configuration to initialize
dotenv.config();

// create a new pool for connecting to our database
const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
	console.error('Unexpected error on idle client', err);
	process.exit(-1);
});

// simple queries using pool
pool.query('SELECT * FROM areas', (err, res) => {
	if (err) {
		console.log(err.stack);
	} else {
		console.log(res.rows);
	}
	pool.end();
});
