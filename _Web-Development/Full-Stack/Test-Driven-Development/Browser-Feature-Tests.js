// import assert from the 'chai' library
const { assert } = require('chai');
// this test also requires PhantomJS and WebdriverI/O

// describe the start of interaction with the feature
describe('User visits root', () => {
	// discribe the condition required (if any) to test the specific feature
	describe('without existing messages', () => {
		// define desired result
		it('starts blank', () => {
			// access the browser object given by WebdriverI/O
			// the url() method takes one arg, a url.
			browser.url('/');
			// the assert.equal() method takes two args, that should be equal, and compares them
			assert.equal(browser.getText('#messages'), '');
			// use the browser.getText() method to pull the inner html of the element with an id of 'messages'
			// compare to an empty string to verify that the inner html is empty
		});
	});

	describe('posting a message', () => {
		it('saves the message with the author information', () => {
			// define variables to pass into our headless browser
			const message =
				'feature tests often hit every level of the TDD Testing Pyramid';
			const author = 'username';
			// the headless browser is a new instance every time, therefore you must go back to the url again.
			browser.url('/');
			// use setValue() to simulate a user adding text, uses a CSS selector for the first value, and the content for the second value
			browser.setValue('input[id=author]', author);
			browser.setValue('textarea[id=message]', message);
			// use click() to tell the headless browser to simulate a user clicking a button, in this case 'submit'
			browser.click('input[type=submit]');
			// assert.include() checks for any instance of the second arg within the first arg instead of directly comparing them like .equal()
			assert.include(browser.getText('#messages'), author);
			assert.include(browser.getText('#messages'), message);
		});
	});
});

// PhantomJS docs: https://phantomjs.org/documentation/
