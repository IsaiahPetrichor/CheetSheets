/*
Whiteboarding consists of six steps:
    Clarify the Problem
    Create Inputs
    Outline the Solution
    Code the Solution
    Test the Solution
    Analyze the Solution
*/

// Problem 1: Return a boolean based on if an Array contains a pythagorean triplet.

// CLARIFY
/*
    what are pythagorean triplets?
        // Pythagorean Triplets are a set of 3 numbers that will return true in a 
        pythagorean theorum equation (a^2 + b^2 = c^2)
    does the input consist of just an array?
    will the input only have numbers, or include other data types?
    should output be just true or false?
*/

// CREATE INPUTS & EDGE CASES
/*
    clarify with the interviewer about all edge cases
    should i expect to receive an array with a length less than 3?
    or an array with negative numbers?
    should i expect to receive a non-array input?

    have a 'happy path' that will return true
    have a fail path that will return false
*/

const happyPath = [3, 4, 5];
const failPath = [13, 9, 3];

// WRITE THE OUTLINE
/*
    create a function that takes an input of an array
    create variables and assign them the values of each element in the input array
    plug each variable into pythagorean theorum
    return true or false based on the calculations of the theorum 
*/ // THIS DOES NOT WORK IF THE ARRAY IS LONGER THAN 3 ELEMENTS

/*
    1. iterate through the list
    2. iterate one over
    3. iterate one over again
    4. square the elements and compare them
*/

// WRITE THE CODE
const isPythagoreanTriple = (array) => {
	const sorted = array.sort((a, b) => {
		if (a < b) return -1;
		if (b < a) return 1;
		return 0;
	});

	for (let i = 0; i < sorted.length; i++) {
		for (let j = i + 1; j < sorted.length; j++) {
			for (let k = j + 1; k < sorted.length; k++) {
				if (sorted[i] ** 2 + sorted[j] ** 2 === sorted[k] ** 2) return true;
			}
		}
	}
	return false;
};

// TEST THE SOLUTION
isPythagoreanTriple(happyPath);
isPythagoreanTriple(failPath);

// ANALYZE THE SOLUTION
// O(n^3)
