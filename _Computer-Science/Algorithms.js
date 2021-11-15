// BUBBLE SORT
{
	/*
    the bubble sort algorithm swaps elements if the element on the 
    left is larger than the one on the right.

    The Efficiency of Bubble Sort is: 
        O(n(n-1)) = O(n(n)) = O(n^2)
    The diagram analyzes the pseudocode implementation of bubble sort 
    to show how we draw this conclusion.

    When calculating the run-time efficiency of an algorithm, we drop 
    the constant (-1), which simplifies our inner loop comparisons to 
    n.

    This is how we arrive at the algorithm’s runtime: O(n^2).
    */
}

// Example
// Helper swapping function
const swap = (arr, indexOne, indexTwo) => {
	const temp = arr[indexTwo];
	arr[indexTwo] = arr[indexOne];
	arr[indexOne] = temp;
};

// Actual sorting algorithm
const bubbleSort = (input) => {
	let swapCount = 0;
	let swapping = true;

	while (swapping) {
		swapping = false;
		for (let i = 0; i < input.length - 1; i++) {
			if (input[i] > input[i + 1]) {
				swap(input, i, i + 1);
				swapCount++;
				swapping = true;
			}
		}
	}
	console.log(`Swapped ${swapCount} times`);
	return input;
};

module.exports = swap;
module.exports = bubbleSort;

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])); // Runs in O(n^2)
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Runs in O(n)

/////////////////////////////////////////////////////////////////////

// MERGE SORT
{
	/*
	Merge sort consists of two distinct steps:

	Splitting the input array – The algorithm recursively splits the 
	input array until each element is in its own array.

	Merging sorted arrays – The algorithm compares and combines the 
	elements of arrays until the input array is sorted.
	*/
}

// Example
const mergeSort = (startArray) => {
	const length = startArray.length;
	if (length === 1) {
		return startArray;
	}

	const mid = Math.floor(length / 2);
	const leftArray = startArray.slice(0, mid);
	const rightArray = startArray.slice(mid, length);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
	const sortedArray = [];
	while (leftArray.length > 0 && rightArray.length > 0) {
		if (leftArray[0] < rightArray[0]) {
			sortedArray.push(leftArray[0]);
			leftArray.shift();
		} else {
			sortedArray.push(rightArray[0]);
			rightArray.shift();
		}
	}
	return sortedArray.concat(leftArray).concat(rightArray);
};

module.exports = { mergeSort };

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));

/////////////////////////////////////////////////////////////////////

// QUICKSORT
{
	/*
	Unlike merge sort, which requires additional memory for auxiliary arrays, 
	quicksort is space-saving because it deploys in-place sorting.

	As runtime performance goes, quicksort requires more comparisons for 
	sorting a larger input than mergesort. Like bubble sort, quicksort has a 
	worst case runtime of O(N^2). This can happen when quicksort’s input 
	data set comprises:

	pre-sorted numbers,
	backward-sorted numbers, or
	all similar elements along with a poorly chosen pivot element that 
	produces a partition of zero or one element.
	On average, like merge sort, the runtime of quicksort is O(N * log N) 
	if partition sizes are roughly equal.

	The basic idea of the quicksort algorithm is to:

	split the initial unsorted data set into a left partition and a right 
	partition
	sort each partition recursively until there is only one element left
	return the sorted array
	We use a pivot element to divide our unsorted array into two parts. 
	The elements in these parts must meet these conditions after partitioning:

	all elements in the left partition must be less than or equal to the pivot 
	element
	all elements in the right partition must be greater than or equal to the 
	pivot element
	Determining the pivot index is done through a procedure called partitioning. 
	Our algorithm uses an array to store the data set and stipulates the 
	boundary of the data set with left and right pointers. 
	*/
}
// Uses the earlier defined 'swap' function
// the Partition fuction:
const partition = (array, leftIndex, rightIndex) => {
	const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
	while (leftIndex <= rightIndex) {
		while (array[leftIndex] < pivot) {
			leftIndex++;
		}
		while (array[rightIndex] > pivot) {
			rightIndex--;
		}

		if (leftIndex <= rightIndex) {
			swap(array, leftIndex, rightIndex);
			leftIndex++;
			rightIndex--;
		}
	}
	return leftIndex;
};

// The actual quicksort function:
const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
	if (leftBound < rightBound) {
		console.log(
			'. Calling partition',
			array,
			`with leftBound ${leftBound} and rightBound ${rightBound}`
		);
		const pivotIndex = partition(array, leftBound, rightBound);
		console.log(`. Returning pivotIndex = ${pivotIndex}`);
		console.log(
			`\nCalling quicksort for left partition with leftBound ${leftBound} and (pivotIndex-1) ${
				pivotIndex - 1
			}`
		);
		quicksort(array, leftBound, pivotIndex - 1);
		console.log(
			`\nCalling quicksort for right partition with pivotIndex ${pivotIndex} and rightBound ${rightBound}`
		);
		quicksort(array, pivotIndex, rightBound);
	}
	return array;
};

/////////////////////////////////////////////////////////////////////
