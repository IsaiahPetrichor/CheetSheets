// Posting Data to the server using XHR
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({ id: '200' });

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;
	}
};

xhr.open('POST', url);
xhr.send(data);

// best practice to put them in a 'DOMContentLoaded' event listener
document.addEventListener('DOMContentLoaded', () => {
	// get element that user uses to make request (if any)
	document.getElementById('get-json').onclick = () => {
		// XHR GET request
		const req = new XMLHttpRequest();
		req.open('GET', 'https://s3.amazonaws.com/freecodecamp/funny-cat.jpg');
		req.send();
		req.onload = () => {
			const json = JSON.parse(req.responseText);
			document.getElementById('response-container').innerHTML =
				JSON.stringify(json);
		};
	};
});

// fetch .then methods

//fetch() function
fetch();
//this is all you need for a GET request
const fetchResponsePromise = fetch(resource);
//fetch resource is just simply the url to get, post, put or delete sources from the fetch request

//fetch init is optional, it takes an object containing all sorts of properties
const fetchResponsePromise = fetch(resource, {
	method: 'POST',
});

//fetch headers

// fetch GET method
fetch();

//fetch POST method
