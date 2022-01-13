// Query strings
/*
the question mark (?) is used to sepererate the URL from 
the query string

the equals sign (=) is used to signify a key value pair
ex. url.com/page?key=value

ampersand (&) are used to seperate key value pairs
ex. url.com/page?key=value&key2=value2
*/

// URL Encoding / Percent-encoding
/*
URL's have reserved characters that provide context to sites
characters are as follows, with the object key being the 
character that is reserved and the value being the 
percent-encoding that can be used to represent the actual
character in a URL
*/

const reservedCharacters = {
	'!': '%21',
	'#': '%23',
	$: '%24',
	'%': '%25',
	'&': '%26',
	"'": '%27',
	'(': '%28',
	')': '%29',
	'*': '%2A',
	'+': '%2B',
	',': '%2C',
	'/': '%2F',
	':': '%3A',
	';': '%3B',
	'=': '%3D',
	'?': '%3F',
	'@': '%40',
	'[': '%5B',
	']': '%5D',
};
