// the brower has many built in APIs
// check MDN for a list: https://developer.mozilla.org/en-US/docs/Web/API#specifications

// The most important ones are as follows

// part of the DOM API:
Document; // https://developer.mozilla.org/en-US/docs/Web/API/Document
{
	// create a div and save it to a js variable
	const newDiv = document.createElement('div');
	// select the element with the ID of 'container'
	const main = document.getElementById('elementIdHere');
	// select the element using the more modern query selector (Accepts all valid CSS selectors)
	const query1 = document.querySelector('.classNameHere');
	// or select all of the elements with the selector(s)
	const query2 = document.querySelectorAll('div', '.class', '#id'); // multiple values makes it use OR logic
	// append a js variable containing an element to the document
	Document.append(newDiv);
}

// Also part of the DOM API (mostly read only):
Window; // https://developer.mozilla.org/en-US/docs/Web/API/Window
{
	// accessing the size of the viewport
	const pageHeight = Window.innerHeight;
	const pageWidth = Window.innerWidth;

	// Window methods:
	Window.alert();
	Window.scroll();
	Window.close();
	Window.open();
}

// Also DOM API, although not usually called directly like window and document:
Element;

// Fetch API:
fetch();

// Document common usage
