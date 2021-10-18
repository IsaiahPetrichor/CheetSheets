function checkCashRegister(price, cash, cid) {
	let changeDue = cash - price;
	let status = 'OPEN';

	let hundreds = cid[8][1] / 100;
	let twentys = cid[7][1] / 20;
	let twentyChange = 0;
	let tens = cid[6][1] / 10;
	let tenChange = 0;
	let fives = cid[5][1] / 5;
	let fiveChange = 0;
	let ones = cid[4][1] / 1;
	let oneChange = 0;
	let quarters = cid[3][1] / 0.25;
	let quarterChange = 0;
	let dimes = cid[2][1] / 0.1;
	let dimeChange = 0;
	let nickles = cid[1][1] / 0.05;
	let nickleChange = 0;
	let pennies = cid[0][1] / 0.01;
	let pennyChange = 0;

	let change = [];

	while (changeDue > 0) {
		if (changeDue - 100 >= 0 && hundreds > 0) {
			changeDue -= 100;
			hundreds--;
		} else if (changeDue - 20 >= 0 && twentys > 0) {
			changeDue -= 20;
			twentys--;
			twentyChange += 20;
		} else if (changeDue - 10 >= 0 && tens > 0) {
			changeDue -= 10;
			tens--;
			tenChange += 10;
		} else if (changeDue - 5 >= 0 && fives > 0) {
			changeDue -= 5;
			fives--;
			fiveChange += 5;
		} else if (changeDue - 1 >= 0 && ones > 0) {
			changeDue -= 1;
			ones--;
			oneChange += 1;
		} else if ((changeDue - 0.25).toFixed(2) >= 0 && quarters > 0) {
			changeDue = (changeDue - 0.25).toFixed(2);
			quarters--;
			quarterChange += 0.25;
		} else if ((changeDue - 0.1).toFixed(2) >= 0 && dimes > 0) {
			changeDue = (changeDue - 0.1).toFixed(2);
			dimes--;
			dimeChange += 0.1;
		} else if ((changeDue - 0.05).toFixed(2) >= 0 && nickles > 0) {
			changeDue = (changeDue - 0.05).toFixed(2);
			nickles--;
			nickleChange += 0.05;
		} else if ((changeDue - 0.01).toFixed(2) >= 0 && pennies > 0) {
			changeDue = (changeDue - 0.01).toFixed(2);
			pennies--;
			pennyChange += 0.01;
		} else {
			status = 'INSUFFICIENT_FUNDS';
			break;
		}
	}
	if (status === 'INSUFFICIENT_FUNDS') {
		change = [];
	} else {
		if (twentyChange) {
			change.push(['TWENTY', twentyChange]);
		}
		if (tenChange) {
			change.push(['TEN', tenChange]);
		}
		if (fiveChange) {
			change.push(['FIVE', fiveChange]);
		}
		if (oneChange) {
			change.push(['ONE', oneChange]);
		}
		if (quarterChange) {
			change.push(['QUARTER', quarterChange]);
		}
		if (dimeChange) {
			change.push(['DIME', dimeChange]);
		}
		if (nickleChange) {
			change.push(['NICKLE', nickleChange]);
		}
		if (pennyChange) {
			change.push(['PENNY', Number(pennyChange.toPrecision(1))]);
		}
		if (
			!hundreds &&
			!twentys &&
			!tens &&
			!fives &&
			!ones &&
			!quarters &&
			!dimes &&
			!nickles &&
			!pennies
		) {
			status = 'CLOSED';
		}
	}
	if (status === 'CLOSED') {
		change = cid;
	}
	return { status: status, change: change };
}

console.log(
	checkCashRegister(3.26, 100, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
);

console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 0.5],
		['NICKEL', 0],
		['DIME', 0],
		['QUARTER', 0],
		['ONE', 0],
		['FIVE', 0],
		['TEN', 0],
		['TWENTY', 0],
		['ONE HUNDRED', 0],
	])
);
