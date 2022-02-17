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
