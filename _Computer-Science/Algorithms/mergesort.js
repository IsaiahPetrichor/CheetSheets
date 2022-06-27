// recursively split and then merge arrays in sorted order

const mergesort = (arr) => {
	// if the array has one or less element it is sorted, return array.
	if (arr.length <= 1) return arr;

	// find the mid point to slice the array
	const mid = Math.floor(arr.length / 2);
	// slice the left half off
	const left = arr.slice(0, mid);
	// and the right
	const right = arr.slice(mid);

	// call the function with each side of the array merged
	return merge(mergesort(left), mergesort(right));
};

const merge = (left, right) => {
	// empty array to hold results
	const sorted = [];

	// loop while the starting arrays have values
	while (left.length > 0 && right.length > 0) {
		// check if left arrays element is smaller
		if (left[0] < right[0]) {
			// push to result
			sorted.push(left.shift());
			// if left element is not smaller than right element must be smaller or equivalent
		} else {
			sorted.push(right.shift());
		}
	}

	// return the array containing the sorted elements and any remaining elements in left and right
	return [...sorted, ...left, ...right];
};

// export for tests
module.exports = mergesort;
