function telephoneCheck(str) {
	let regex = /1?\s?(\(\d{3}\)|\d{3})\s?-?\d{3}\s?-?\d{4}$/;
	if (str.match(/\d/g).join('').length === 11 && str[0] !== '1') {
		return false;
	}
	if (
		str.match(/\d/g).join('').length > 11 ||
		str.match(/\d/g).join('').length < 10
	) {
		return false;
	}
	if (str[0] === '(' && str[4] !== ')') {
		return false;
	}
	return regex.test(str);
}

telephoneCheck('(555-555-5555');
