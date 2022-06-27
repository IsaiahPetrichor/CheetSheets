const mergesort = require('../mergesort');
const { expect, assert } = require('chai');

const createRandomArray = () => {
	let array = [];
	for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
		array.push(Math.floor(Math.random() * 50));
	}

	return array;
};

let count = 0;
while (count < 20) {
	const beginningArray = createRandomArray();
	const mergesortArray = mergesort(beginningArray);

	const jsSortedArray = beginningArray.sort((a, b) => {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});

	describe('Mergesort function', () => {
		it('sorts an array of numbers', () => {
			assert.isArray(mergesortArray);
			expect(mergesortArray).to.deep.equal(jsSortedArray);
		});
	});

	count++;
}
