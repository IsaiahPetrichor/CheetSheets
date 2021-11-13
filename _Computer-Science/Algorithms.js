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

	*/
}

/////////////////////////////////////////////////////////////////////

// QUICKSORT
{
	/*

	*/
}

/////////////////////////////////////////////////////////////////////
