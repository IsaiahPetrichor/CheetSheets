const createRandomArray = () => {
	let array = [];
	for (let i = 0; i < Math.floor(Math.random() * 101); i++) {
		array.push(Math.floor(Math.random() * 101));
	}

	return array;
};

const jsSort = (array) => {
	const finalArr = array.sort((a, b) => {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});

	return finalArr;
};

const swap = (arr, indexOne, indexTwo) => {
	const temp = arr[indexTwo];
	arr[indexTwo] = arr[indexOne];
	arr[indexOne] = temp;
};

module.exports = { createRandomArray, jsSort, swap };
