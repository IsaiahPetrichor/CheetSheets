// compile ts files into js using 'tsc file_name.ts'

// basic typing in ts means we cannot assign a variable to a different type
let booleanVariable = true;
// this variable is a boolean and can ONLY ever be a boolean or ts will throw an error

// variables with no inital value don't adhere to ts typing
// to force a variable with no value to a type, use type annotation/declaration
let stringVariable: string;

/*
tsconfig.json contains many options including module type
and enables the usage of 'tsc' by itself to compile multiple
or all of the ts files in the directory
*/

// Declare types for parameters in function definitions
function hello(name: string, count: number) {
  for (let i = count; i > 0; i--) {
    console.log(`Hello ${name}!`);
  }
}

// make a parameter optional by adding '?' after the name
function doStuff(num?: number) {
  console.log(`Your number was ${num || 0}`);
}
// otherwise use a default parameter to accomplish the same thing
function doStuff2(num = 0) {
  console.log(`Your number was ${num}`);
}

// TypeScript has type inferencing that will help in many cases
function returnStuff(bonk: string) {
  return `${bonk}`;
}
const bingBong = returnStuff('bonk');
// TS knows this HAS to be a string.
// const bingBong2: number = returnStuff('bonk');
/* this will throw an error because you cant implicitly convert
a string to a number. */

// Explicitly declare the return type in a function
function returnType(str: string): string | undefined {
  if (str === 'bing bong') {
    return `olo ${str}`;
  }

  // return 0;
  // would throw error because it must return string.
}

// if a function has no return value use void
function simpleLog(): void {
  console.log('I like turtles');
}

// TypeScript adds a third type of comment for documentation
/**
 * This is the TS documentation comment
 * The format starts with an extra asterisk
 *
 * @param paramName - this is documenting a functions first parameter
 * @returns this is documenting what the function should return
 */
