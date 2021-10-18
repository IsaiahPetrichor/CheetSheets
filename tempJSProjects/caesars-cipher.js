function rot13(str) {
	let newArr = str.split('');
	let newStr = '';
	newArr.forEach((letter) => {
		let charCode = letter.charCodeAt(letter[0]);
		if (charCode > 64 && charCode < 91) {
			charCode -= 13;
			if (charCode < 65) {
				let difference = 65 - charCode;
				charCode = 91 - difference;
			}
			if (charCode > 90) {
				let difference = charCode - 90;
				charCode = 64 + difference;
			}
		}
		if (charCode > 64 && charCode < 91) {
			newStr += String.fromCharCode(charCode);
		} else {
			newStr += letter;
		}
	});
	return newStr;
}
