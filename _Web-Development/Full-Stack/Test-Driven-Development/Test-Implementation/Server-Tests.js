// Chai testing framework
import { assert } from 'chai';
// jsdom library
import { jsdom } from 'jsdom';
// supertest library to make server calls
import request from 'supertest';

// custom function to parse html using jsdom
// jsdom is essentially a roundabout to using the document object outside of a browser
const parseTextFromHTML = (htmlAsString, selector) => {
	const selectedElement = jsdom(htmlAsString).querySelector(selector);
	if (selectedElement !== null) {
		return selectedElement.textContent;
	} else {
		throw new Error(
			`No element with selector ${selector} found in HTML string`
		);
	}
};

describe('HTML tests', () => {
	describe('#bar', () => {
		it('should include the string "Hello"', () => {
			// foo represents some html that is returned from the server,
			// in real use it would be a variable filled from a server call.
			const foo =
				'<html><div id="bar">Hello</div><div id="buzz">Hello</div><html>';
			// check the return value of the function to see if it includes 'Hello'
			assert.include(parseTextFromHTML(foo, '#bar'), 'Hello');
		});
	});
});

// async example
describe('the homepage', () => {
	it('the #page-title element contains the page title', async () => {
		const pageTitle = 'My Page';
		const response = await request(backend_file).get('/').send();
		assert.include(parseTextFromHTML(response.text, '#page-title'), pageTitle);
	});
});

// testing the back-end
describe('root page', () => {
	describe('GET request', () => {
		it('returns a 200 status', async () => {
			const response = await request(app).get('/');

			assert.equal(response.status, 200);
		});

		// when checking requests it is best practice to have a 'sad path' and a 'happy path'

		// happy path
		it('contains the correct title', async () => {
			const response = await request(app).get('/');

			assert.equal(
				parseTextFromHTML(response.text, '#page-title'),
				'Messaging App'
			);
		});
	});
});
