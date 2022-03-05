const bcrypt = require('bcrypt');

// create a new hashed password from plaintext
const passwordHash = async (password, saltRounds) => {
	try {
		const salt = await bcrypt.genSalt(saltRounds);
		const hash = await bcrypt.hash(password, salt);
		return hash;
	} catch (err) {
		console.log(err);
	}
	return null;
};

// verify a given password against the stored hash
const comparePasswords = async (password, hash) => {
	try {
		const matchFound = await bcrypt.compare(password, hash);
		return matchFound;
	} catch (e) {
		console.log(err);
	}
	return false;
};
