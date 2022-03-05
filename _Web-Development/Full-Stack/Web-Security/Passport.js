const express = require('express');
const app = express();
const session = require('express-session');
const store = new session.MemoryStore();
const db = require('./db');
const PORT = process.env.PORT || 4001;
// Install both passport & passport-local
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// enable use of json request bodies
app.use(express.json());
// enable the use of html request bodies
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
// Serve the front-end files
app.use(express.static(__dirname + '/public'));

// use express-sessions to complement passport
app.use(
	session({
		secret: 'f4z4gs$Gcg',
		cookie: { maxAge: 300000000, secure: false },
		saveUninitialized: false,
		resave: false,
		store,
	})
);

// passport must be initialized for the authentication module
app.use(passport.initialize());

// allow persistent login
app.use(passport.session());

// the serializeUser function attaches the
// user id to a cookie sent to the browser
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// the deserializeUser function takes the cookie
// and checks the database for that user
passport.deserializeUser((id, done) => {
	db.users.findById(id, (err, user) => {
		if (err) return done(err);
		return done(null, user);
	});
});

// Add passport local strategy
passport.use(
	new LocalStrategy((username, password, done) => {
		db.users.findByUsername(username, (err, user) => {
			if (err) return done(err);
			if (!user) return done(null, false);
			if (user.password != password) return done(null, false);
			return done(null, user);
		});
	})
);

// User Login using passport.authenticate()
app.get('/login', (req, res) => {
	res.render('login');
});

app.get('/profile', (req, res) => {
	// Pass user object stored in session to the view page
	res.render('profile', { user: req.user });
});

// Add the passport middleware
app.post(
	'/login',
	passport.authenticate('local', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect('profile');
	}
);

// User Registration
app.post('/register', async (req, res) => {
	const { username, password } = req.body;
	// Create new user:
	const newUser = await db.users.createUser({ username, password });
	// Add if/else statement with the new user as the condition:
	if (newUser) {
		// Send correct response if new user is created:
		res.status(201).json({ msg: 'User created.', newUser });
	} else {
		// Send correct response if new user failed to be created:
		res.status(500).json({ msg: 'User creation failed...' });
	}
});

// User Logout
app.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/login');
});

// start the express server
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
