// Union Types
{
	// basic union types simply use the '|' character
	let aVar: string | number;

	// type narrowing
	/* TypeScript will throw a fit if we dont verify the 
    type needed for certain methods */
	if (typeof aVar === 'string') {
		const lowerAVar = aVar.toLowerCase();
	}
	/* This is very useful when you need to accept multiple
    types for a function instead of writing multiple functions */

	/* TS will also infer return types, not only for functions 
    that only have one return type but also for union return types */
	function createThing() {
		return 0;
	}
	const numOrStr: number | string = createThing();

	// Unions are also useful in arrays
	const dateNumber = new Date().getTime();
	const dateString = new Date().toString();

	const listOfTimes: (string | number)[] = [dateNumber, dateString];

	/* TS without type narrowing will throw an error on a method
    if both types in the union dont have that method, but if they
    do then no error will be thrown */
	type Like = {
		username: string;
		displayName: string;
	};

	type Share = {
		username: string;
		// if we remove displayName then the function will throw an error
		displayName: string;
	};

	function getFriendNameFromEvent(event: Like | Share) {
		return event.displayName || event.username;
	}

	// Literal types are used for making distinct states
	type Status = 'idle' | 'downloading' | 'complete';

	function downloadStatus(status: Status) {
		if (status === 'idle') console.log('Download');
		if (status === 'downloading') console.log('Downloading...');
		if (status === 'complete') console.log('Your download is complete!');
	}

	downloadStatus('downloading');
}
