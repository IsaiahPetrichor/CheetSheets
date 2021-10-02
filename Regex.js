// Default Regex includes
/*

. ---- Any character, as long as it has a value
\. ---- Escape to make it check for just a '.'

\w ---- Alphanumeric [A-Za-z0-9_]
\d ---- Digits [0-9]
\s ---- Whitespace characters

\W ---- NOT Alphanumeric [A-Za-z0-9_]
\D ---- NOT Digits [0-9]
\S ---- NOT Whitespace characters

*/

// Negation
// [^a] will accept any character OTHER than 'a'

// Alternation
// hello|goodbye will accept either 'hello' or 'goodbye'

// Groupings
// ()   limits alternation
// i like (turtles|tacos) more!     will match either 'i like turtles more!' or 'i like tacos more!'

// Ranges, denoted by brackets
// [asd] will match 'a' 's' or 'd'
// [a-d] will match 'a' 'b' 'c' or 'd'

// Quantifiers
// a{3} will match exactly 3 'a' characters in a row
// a{3,5} will match at least 3 'a' characters and at most 5 'a' characters

// Optional Quantifiers
// hello?   will match either 'hell' or 'hello'
// hello\?  will match exactly 'hello?'

// Kleene star and Kleene plus
// oo*f     will match any of the following: of, oof, ooof, oooof, etc. the * denotes 0 or more of the prior character
// oo+f     will match any of the following: oof, ooof, oooof, etc. the + denotes 1 or more of the prior character

// Anchors
// ^hello   will match any string that STARTS with 'hello'
// end$     will match any string that ENDS with 'end'
// ^hello$  will match ONLY the string 'hello' with nothing before or after it within the string
// \^ and \$ are valid escape characters to get the string values of '^' and '$'

// ---- doot ---- //
// Codecademy paste
/*
Regular expressions are special sequences of characters that describe a pattern of text that is to be matched
We can use literals to match the exact characters that we desire
Alternation, using the pipe symbol |, allows us to match the text preceding or following the |
Character sets, denoted by a pair of brackets [], let us match one character from a series of characters
Wildcards, represented by the period or dot ., will match any single character (letter, number, symbol or whitespace)
Ranges allow us to specify a range of characters in which we can make a match
Shorthand character classes like \w, \d and \s represent the ranges representing word characters, digit characters, and whitespace characters, respectively
Groupings, denoted with parentheses (), group parts of a regular expression together, and allows us to limit alternation to part of a regex
Fixed quantifiers, represented with curly braces {}, let us indicate the exact quantity or a range of quantity of a character we wish to match
Optional quantifiers, indicated by the question mark ?, allow us to indicate a character in a regex is optional, or can appear either 0 times or 1 time
The Kleene star, denoted with the asterisk *, is a quantifier that matches the preceding character 0 or more times
The Kleene plus, denoted by the plus +, matches the preceding character 1 or more times
The anchor symbols hat ^ and dollar sign $ are used to match text at the start and end of a string, respectively
*/
