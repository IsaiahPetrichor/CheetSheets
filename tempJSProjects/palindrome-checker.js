function palindrome(str) {
	let newStr = str
		.toLowerCase()
		.match(/[a-z0-9]/g)
		.join('');
	let reverseStr = str
		.toLowerCase()
		.match(/[a-z0-9]/g)
		.reverse()
		.join('');
	if (newStr === reverseStr) return true;
	return false;
}

palindrome('eye');
palindrome('A man, a plan, a canal. Panama');
