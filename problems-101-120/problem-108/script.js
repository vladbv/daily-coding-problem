// Problem 108
// This problem was asked by Nest.

// Create a basic sentence checker that takes in a stream of characters and determines whether they form valid sentences. If a sentence is valid, the program should print it out.

// We can consider a sentence valid if it conforms to the following rules:

// The sentence must start with a capital letter, followed by a lowercase letter or a space.
// All other characters must be lowercase letters, separators (,,;,:) or terminal marks (.,?,!,‽).
// There must be a single space between each word.
// The sentence must end with a terminal mark immediately following a word.

// Checking if a sentence is valid

const SEPARATORS = [',', ';', ':'];
const TERM_MARKS = ['.', '?', '!'];

const isUpperCase = string => /^[A-Z]*$/.test(string);

// @param {string} stream

function sentenceChecker(stream) {
	const isValid = (context, char, nextChar) => {
  	const currValid = true;

    if(!context && !isUpperCase(char)) return false;

    if(context.length === 1 && (char !== ' ' || isUpperCase(char))){
	return false;
}

if(TERM_MARKS.includes(char))
	return (
  	SEPARATORS.includes(context[context.length - 1]) ||
    TERM_MARKS.includes(context[context.length - 1])
  );

  if(!nextChar) return TERM_MARKS.includes(char) && currValid;

  context += nextChar;

  return currValid ? isValid(context, nextChar[0], nextChar.substring(1)) : false;
};

return isValid('', stream[0], stream.substring(1)) ? stream : '';

}
console.log(sentenceChecker('This is a valid sentence.'));
