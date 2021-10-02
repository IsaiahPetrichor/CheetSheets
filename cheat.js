// REMEMBER TO RUN YOUR SCRIPT TO CHECK FOR ERRORS USING: node 'APPNAME'.js

// Arrays!

// empty array declaration
let arr = [];

// array of strings
let arr2 = ['doot', 'boop', 'noot'];

// calling an index of an array
console.log(arr2[1]);

// changing an element
arr2[1] = 'schloop';

// changing a whole array
arr2 = ['schloop'];

// you can still re-assign an element in a "const" array but you cannot re-assign the array itself.

// .length, this will return the number of elements in an array or the number of characters in a string.
console.log(arr2.length);

// .push, this will add an element to the end of an array, works with multiple elements.
arr2.push('doot', 'boot');

// .pop, this will remove the last element from an array.
arr2.pop();

// other methods

// .shift, this removes the first item

// .unshift, this will add an element to the start of the array

// .slice(startElement, numOfElements), this will remove the selected elements.

// .indexOf, this will return the index of an element

// array functions
function changeArr(arr) {
    arr2[1] = "BONK";
}

// creating a nested array
const nestArr = [[1], [1, 1]];

// accessing array
console.log(nestArr[0][0]);







// Loops!










// Objects!

// blank object
const exampleObject = {};

// key-value pair in an object literal
const keyValue = {
    name: "doot",
    role: "doot doot"
};

// Accessing objects and editing pieces
keyValue.name = "noot noot";

// adding methods using functions
const functionObj = {
    func: function () {
        console.log("This is a function method inside an object");
    }
};
// calling obj function
functionObj.func();

// making a nested object
const nestObj = {
    oof: {
        oofers: {
            name: "mitch",
            classify: function () {
                console.log("Information redacted.");
            },
            "array example": ["turtles", "schleem"]
        }
    }
};
// calling nested objects and their key-value pairs
nestObj.oof.oofers.classify();
console.log(nestObj.oof.oofers.name);

// accessing keys with special characters
console.log(nestObj.oof.oofers["array example"][0]);

// editing objects with functions
function addProp(obj) {
    obj.name = "Jimmy";
    obj["meme meme"] = "meme";
}
// using
addProp(keyValue);
console.log(keyValue);



// for...in loops object
let spaceship = {
    crew: {
        captain: {
            name: "Tom"
        },
        "first officer": {
            name: "Rylee"
        }
    }
};
// for...in loop
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

// 'this.' keyword for accessing other properties inside an object
const robot = {
    model: "1E78V2",
    energyLevel: 100,
    //shorthand function declaration within an object
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
  };

// Use an underscore to denote that a property should not be manually changed
_dontChange: "oof";

// getter & setter methods
const robot2 = {
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return "System malfunction: cannot retrieve energy level";
      }
    },
    // setters require at least one parameter
    set energyLevel(level) {
        if (typeof level === 'number' && level >= 0) {
            this._energyLevel = level;
        } else {
            return "Please enter a valid number."
        }
    }
  };
  // no parentheses for calling getter and setter methods
  console.log(robot.energyLevel);
  // example of using setter method
  robot2.energyLevel = 500;

// factory functions, using "property value shorthand"
const robotFactory = (model, mobile) => {
    return {
        model,
        mobile
    }
  };

// destructuring
const { _energyLevel } = robot;
console.log(_energyLevel);

// don't forget to check the MDN on objects!







// Classes!

/* 
Classes are templates for objects.
Javascript calls a constructor method when we create a new instance of a class.
Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
We use the extends keyword to create a subclass.
The super keyword calls the constructor() of a parent class.
Static methods are called on the class, but not on instances of the class.
*/


// Example Class
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    get name() {
        return this._name;
    }
}

// Using the class
const Dave = new Person("Dave", 46);
console.log(Dave.name, Dave.age);







// Modules!

// Modules is a way of saying you have multiple files to store parts of your javaScript
// using the import and export keywords to let parts of the script including variables, functions, and objects be used.

/*Before we dive in, it should be noted that there are multiple ways of implementing modules depending on the runtime environment in which your code is executed. 
In JavaScript, there are two runtime environments and each has a preferred module implementation:

The Node runtime environment and the module.exports and require() syntax.
The browser’s runtime environment and the ES6 import/export syntax.*/



//Browser import/export

// exporting named expressions:
export { function1, function2, variable1 };
// exporting defaults:
export default array1;

// importing non-default exports:
import { function1, function2 } from "./module.js";
//importing default exports:
import array1 from "./module.js";



//Node import/export

//exporting:
module.exports.function1 = function1;

//importing:
const module = require("./module.js");

//importing specifics:
const { function1 } = require("./module.js");







//Error handling

/* There are multiple ways of handling an error. these include: intentionally running code that will cause an error and stop the code from running(not recommended), 
using the 'Error' function to throw an error in console, using the 'Throw' keyword, or using a try... catch statement.
*/



// the Error function
// this will not stop code from running, it is only used to notify the user that an error has occured and that it may cause issues.
console.log(Error("error message..."));

// the Throw keyword
// this will stop the code from running and will notify the user with an error message.

//throw Error("error message...");

// the Try... catch statement
// this is used to throw and error and then run alternate code in order if the try fails.

/*
try {
    throw Error("error message...");
} catch(e) {
    // 'e' is the default result of an error within a try statement.
    console.log(e);
}
*/