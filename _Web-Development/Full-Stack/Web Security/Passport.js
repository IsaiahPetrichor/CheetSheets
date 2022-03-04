// Install both passport & passport-local
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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
	db.users.findById(id, function (err, user) {
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
