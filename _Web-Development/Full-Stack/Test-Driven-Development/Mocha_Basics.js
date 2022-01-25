// Test Driven Development

/*
The basic circle of test driven development
write test -> run test and fail -> write code -> pass test -> refactor (clean up the code)
*/

// Clean Tests

//FIRST
/*
Fast: a test must be fast to be executed often.
Independent: tests must not depend on each other.
Repeatable: a test must be reproducible in any environment.
Self-Validating: a test must have a binary result (Failure or Success) for a quick and easy conclusion.
Timely: a test must be written at the appropriate time, i.e. just before the production code it will validate.
*/

/*
Setup - create objects, variables, and set conditions that your test depends on

Exercise - execute the functionality you are testing

Verify - check your expectations against the result of the exercise phase. You can use the assert library here
*/

// Running a test
// in console: npm test

// Using assert

// import
const assert = require('assert');

// different statements include
assert.ok('var1' === 'var2');

// this is a == comparison
assert.equal('var1', 'var2');

// this is a === comparison
assert.strictEqual('var1', 'var2');

// this compares objects with an ==, it is usually recommended to use the deepStrictEqual instead
assert.deepEqual('obj1', 'obj2');

/*
 fast, complete, reliable, isolated, maintainable, and expressive.
 If you are meeting these six criteria, you are creating high quality test frameworks!
*/

// Example test suite
const assert = require('assert');
const Rooster = require('../index');

describe('Rooster object', () => {
	describe('.announcementDawn function', () => {
		it('returns a rooster call', () => {
			// "setup" define expected result
			const expected = 'cock-a-doodle-doo!';

			// "exercise" Call function and store result in variable
			const result = Rooster.announceDawn();

			// "verify" use assert to compare
			assert.equal(expected, result);
		});
	});
	describe('.timeAtDawn', () => {
		it('returns its argument as a string', () => {
			const expected = '7';
			const result = Rooster.timeAtDawn(7);

			assert.strictEqual(expected, result);
		});
		it('throws an error if passed a number less than 0', () => {
			assert.throws(() => {
				Rooster.timeAtDawn(-1);
			}, RangeError);
		});
		it('throws an error if passed a number greater than 23', () => {
			assert.throws(() => {
				Rooster.timeAtDawn(24);
			}, RangeError);
		});
	});
});

// REMEMBER: Red, Green, Refactor => repeat
