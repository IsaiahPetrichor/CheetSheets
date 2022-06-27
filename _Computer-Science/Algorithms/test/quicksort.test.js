const quicksort = require('../quicksort');
const { expect, assert } = require('chai');
const { createRandomArray, jsSort } = require('./helperFunctions');

let count = 0;
while (count < 20) {
	const beginningArray = createRandomArray();
	const quicksortArray = quicksort(beginningArray);
	const controlSort = jsSort(beginningArray);

	describe('Quicksort function', () => {
		it('Sorts and array of numbers', () => {
			assert.isArray(quicksortArray);
			expect(quicksortArray).to.deep.equal(controlSort);
		});
	});

	count++;
}
