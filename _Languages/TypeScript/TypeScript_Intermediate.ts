// Declare an array with typing, enforcing all elements to be of that type
let arr: string[] = ['hello', 'this', 'is', 'an', 'array'];
// alternative syntax
let arrAlt: Array<number> = [1, 2, 3];

// Multi-dimensional arrays
let multiArr: number[][] = [
	[1, 2],
	[6, 4, 5],
];

// TypeScript has Tuples for defining arrays with multiple types and a defined length
let tup: [number, string, boolean] = [1, 'asd', true];
// Arrays are not assignable to Tuples because they are considered seperate types.

// Type Inference works in typescript, types do not necessarily need to be defined.
// you can even concatenate a tupple into an array
let stringTup: [string, string, string] = ['asd', 'asd', 'asd'];
let stringArr = stringTup.concat('asd');
// ^This is now an array of strings, not a tupple

// Typing rest parameters
function restFunc(str: string, ...moreStr: string[]): string {
	let finalStr: string = str;
	for (let i = 0; i < moreStr.length; i++) {
		finalStr.concat(moreStr[i]);
	}
	return finalStr;
}

// you can define an array of tupples
let tuppleArr: [string, number, boolean][] = [
	['hello', 2, false],
	['turtles', 6, true],
];
