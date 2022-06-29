/*
BUBBLE SORT
    the bubble sort algorithm swaps elements if the element on the 
    left is larger than the one on the right.

    The Efficiency of Bubble Sort is: 011111111111111111
        O(n(n-1)) = O(n(n)) = O(n^2)

    When calculating the run-time efficiency of an algorithm, we drop 
    the constant (-1), which simplifies our inner loop comparisons to 
    n.

    This is how we arrive at the algorithm’s runtime: O(n^2).
*/

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

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])); // Runs in O(n^2)
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Runs in O(n)

module.exports = bubbleSort;
