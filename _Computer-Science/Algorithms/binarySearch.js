/*
Binary Search
    Binary search takes a sorted array and recursively splits the array in half,
    using the value you are searching for compared to the middle element of the
    array. it continues this until the value is found and it takes O(log N).

    If the target value is not found, the function returns null. You used the 
    following steps to create this function:

    Initialize the left and right indices as 0 and the length of the array.
    Create a while loop that continues to execute until the left index equals the 
    right index.
    Get the value at the index that falls in the middle of left and right.
    Return the index if the value is equal to target.
    Set left equal to the current index plus one if the target is greater than the 
    value.
    Set right equal to the current index if the target is less than the value.
    While the benefits of binary search are significant compared to linear search, 
    it’s important to remember that the function will only work on sorted lists.
*/

// Example
const binarySearch = (arr, target) => {
	let left = 0;
	let right = arr.length;

	while (right > left) {
		const indexToCheck = Math.floor((left + right) / 2);
		const checking = arr[indexToCheck];
		console.log(`indexToCheck equals: ${indexToCheck}`);

		if (checking === target) {
			return indexToCheck;
		} else if (target > checking) {
			left = indexToCheck + 1;
		} else {
			right = indexToCheck;
		}
	}
	return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 71;

const targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);

module.exports = binarySearch;
