// quicksort is like merge sort but instead partitions based on a pivot element
const { swap } = require('./test/helperFunctions');

// instead of merge, we have partition
// partition takes linear time
const partition = (arr, low, high) => {
	// get the last element as pivot
	const pivot = arr[high];

	// temporary pivot index
	let i = low - 1;

	// loop through the array to compare elements
	for (let j = low; j <= high; j++) {
		if (arr[j] < pivot) {
			// increment index of smaller element
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return i + 1;
};

// then we have the actual quicksort algorithm
// takes in array to be sorted and optional low and high to define pivots
const quicksort = (arr, low = 0, high = arr.length - 1) => {
	if (low < high) {
		// define pivot index
		const pivotIndex = partition(arr, low, high);

		// sort before and after partition
		quicksort(arr, low, pivotIndex - 1);
		quicksort(arr, pivotIndex + 1, high);
	}

	return arr;
};

module.exports = quicksort;
