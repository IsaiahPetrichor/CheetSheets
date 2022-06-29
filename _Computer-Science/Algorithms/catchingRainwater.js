function catchingRainwater(heights) {
	let totalWater = 0;
	let leftPointer = 0;
	let rightPointer = heights.length - 1;
	let leftBound = 0;
	let rightBound = 0;

	while (leftPointer < rightPointer) {
		if (heights[leftPointer] <= heights[rightPointer]) {
			if (heights[leftPointer] > leftBound) {
				leftBound = heights[leftPointer];
			}
			totalWater += leftBound - heights[leftPointer];
			leftPointer += 1;
		} else {
			if (heights[rightPointer] > rightBound) {
				rightBound = heights[rightPointer];
			}
			totalWater += rightBound - heights[rightPointer];
			rightPointer -= 1;
		}
	}
	return totalWater;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(catchingRainwater(testArray));

module.exports = catchingRainwater;
