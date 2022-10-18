/* Problem 179 

This problem was asked by Google.

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].

*/

/* Splitting a string into strings such that they're a palindrome
 * Time Complexity: O(n^2)
 * @param {string} string
 * @return {string[]}
 */
 
 function mPalindrome(string){
 	// base case
  if(string.length <= 3 && !isPalindrome(string)) return string.split('');
  
  const palindromes = [];
  let temp = '';
  
  // iterate through string until there's a palindrome
  for(let i = 0; i < string.length; i++){
 		// pushing into palindromes if temp string isPalindrome
    if(isPalindrome(temp)){
    	palindromes.push(temp);
      temp = '';
    }
    // keep adding characters
    temp += string[i]
  }
  
  // final check
  if(isPalindrome(temp)) palindromes.push(temp);
  else palindromes.push(...temp);
  return palindromes;
 }
 
 /*
 	* Determining if a string is a palindrome
  * @param {string} string
  * @return {boolean}
  */
  function isPalindrome(string) {
  	if(string.length <= 1) return false;
    const backwards = string
    .split('')
    .reverse()
    .join('')
    return string === backwards;
  }
  console.log(mPalindrome('racecar'));
