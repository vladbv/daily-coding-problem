/* Problem 146
This problem was asked by Google.

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string acbbac, return b. Given the string abcdef, return null. */


// Finding the first recurring character in a string
// @param {string} str
// @return {string}

function findFRec(str) {

	for(let i = 0; i < str.length; i++){
	if(str.indexOf(str[i]) !== i) return str[i];
	}
 return null;
}

console.log(findFRec('acbcbac'));
