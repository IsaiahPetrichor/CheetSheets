const mergesort = require('../mergesort');
const { expect, assert } = require('chai');
const { createRandomArray, jsSort } = require('./helperFunctions');

let count = 0;
while (count < 20) {
	const beginningArray = createRandomArray();
	const mergesortArray = mergesort(beginningArray);

	const controlSort = jsSort(beginningArray);

	describe('Mergesort function', () => {
		it('sorts an array of numbers', () => {
			assert.isArray(mergesortArray);
			expect(mergesortArray).to.deep.equal(controlSort);
		});
	});

	count++;
}
