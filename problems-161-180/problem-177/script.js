/* Problem 177
This problem was asked by Google.

Given a string of words delimited by spaces, reverse the words in string. For example, given hello world here, return here world hello

Follow-up: given a mutable string representation, can you perform this operation in-place?
*/

/* O(N) Time complexity
 * O(N) Space complexity
 * N is the number of words in the phrase
 */
 
 /* 
 	* Given string of words, reverse words
  * @param {string} phrase
  * @return {string}
  */	
  
  function reverseString(phrase){
  	const forward = phrase.split(' ');
    const reverse = [];
    
    // Base case
    
    if(forward.length < 1) return phrase;
    
    // Adding to the front of the array
    for(let i = 0; i < forward.length; i++){
			if(forward[i]) reverse.unshift(forward[i])
  	}
    return reverse.join(' ');
  }
  
  console.log(reverseString('hello world here'))
