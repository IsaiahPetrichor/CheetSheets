// Array/Tupple types
{
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
}

// Custom/Complex Types
{
	// Enums
	{
		// enums have number values similar to array indexes
		enum Direction {
			North, // has a default value of 0
			South, // 1
			East, // 2
			// default values can be changed
			West = 6, // now has a value of 6
			// if there were another value it would start at 7
		}

		// use an Enum with a tupple type annotation
		let DirectionArray: [string, Direction][] = [
			['Canada', Direction.North],
			['Mexico', Direction.South],
		];

		// Enums can also have string values instead of number values, called String Enums
		enum DirectionStr {
			North = 'NORTH',
			South = 'SOUTH',
			East = 'EAST',
			West = 'WEST',
		}
		// using a capitalized variable name for the value is proper convention
	}

	// Object type basics
	{
		// define a custom object using 'interface'
		interface typedObject {
			name: string;
			age: number;
			adult: boolean;
		}

		// type a new object
		const person: typedObject = {
			name: 'Isaiah',
			age: 22,
			adult: true,
		};

		// you can also declare custom object types in a function call
		function doSomething(objectParam: { prop1: string; prop2: number }): void {}
		// or in a variable declaration
		let objectArray: { prop1: string; prop2: number }[] = [
			{ prop1: 'boop', prop2: 23 },
		];
	}

	// Type Aliases
	{
		type customAlias = [string, number, object, boolean];
		const aliasArray: customAlias = ['asd', 2, {}, true];

		// the main use for a type alias is to follow the DRY principal

		// type alias for a function, after the arrow you define the return type
		type functionThing = (param1: string, param2: number) => number;

		let makeNumber: functionThing;
		makeNumber = (param1, param2) => {
			return 0;
		};

		// function types are most useful when used with callbacks
		function callbackThing(func: functionThing) {
			return 0;
		}
	}

	// Generic Types
	{
		// TypeScript’s generics are ways to create collections of types
		type bonk<T> = {
			name: [T, T];
		};
		// uses a placeholder type instead of a strict type, but cant be directly
		// used, its for declaring structure rather than type.
		let newBonk: bonk<string> = {
			name: ['asd', 'asd'],
		};

		// Generic Functions
		// theses are used to define structure for function parameters or return types
		function getFilledArray<T>(value: T, n: number): T[] {
			return Array(n).fill(value);
		}
		let stringArray: string[];
		stringArray = getFilledArray<string>('hi', 6);
	}
}
