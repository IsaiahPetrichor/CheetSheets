function convertToRoman(num) {
	let roman = '';
	while (num > 0) {
		if (num - 1000 >= 0) {
			roman += 'M';
			num -= 1000;
		} else if (num - 900 >= 0) {
			roman += 'CM';
			num -= 900;
		} else if (num - 500 >= 0) {
			roman += 'D';
			num -= 500;
		} else if (num - 400 >= 0) {
			roman += 'CD';
			num -= 400;
		} else if (num - 100 >= 0) {
			roman += 'C';
			num -= 100;
		} else if (num - 90 >= 0) {
			roman += 'XC';
			num -= 90;
		} else if (num - 50 >= 0) {
			roman += 'L';
			num -= 50;
		} else if (num - 40 >= 0) {
			roman += 'XL';
			num -= 40;
		} else if (num - 10 >= 0) {
			roman += 'X';
			num -= 10;
		} else if (num - 9 >= 0) {
			roman += 'IX';
			num -= 9;
		} else if (num - 5 >= 0) {
			roman += 'V';
			num -= 5;
		} else if (num - 4 >= 0) {
			roman += 'IV';
			num -= 4;
		} else if (num - 1 >= 0) {
			roman += 'I';
			num--;
		}
	}
	return roman;
}

console.log(convertToRoman(29));
