/* Problem 192
This problem was asked by Microsoft.

Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string abracadabra and the pattern abr, you should return [0, 7].
*/

/* 
 * Finding all starting indices where a pattern appears in a string
 * @param {string} str
 * @param {string} pattern
 * @return {number[]}
 */
 
 function matchPattern (str, pattern) {
 	let startIndex = 0;
  const patternLen = pattern.length;
  
  // Keep track of each occurence of the pattern
  let index;
  const indices = [];
  
  // we keep going as long as an instance of the pattern is found
  while(str.indexOf(pattern, startIndex) !== - 1) {
  	// We push the current index for the instance of a pattern
   	indices.push(str.indexOf(pattern, startIndex));
    
    // Moving the starting point forward
    startIndex = str.indexOf(pattern, startIndex) + 1;
  }
  return indices;
 }
 
 console.log(matchPattern('abracadabra', 'abr'))
