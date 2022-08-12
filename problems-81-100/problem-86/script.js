// Problem 86
// This problem was asked by Amazon.
// Given a string, determine whether any permutation of it is a palindrome.
// For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily should return false, since there's no rearrangement that can form a palindrome.



// Checking if any permutation of a string is a palindrome
// @param {string} str
// @return {boolean}
function checkFPalindrome(str){
let numchars = 256;
let count = Array(numchars).fill(0);

  // For each character in input strings,
  // incrementing count in the corresponding count array
  for(let i = 0; i < str.length; i++){
		count[str[i].charCodeAt()]++;
    	}

    // Count odd occuring characters
    let odd = 0;
    for(let i = 0; i < numchars; i++){
    	if((count[i] & 1) == 1)
      odd++;

      if(odd > 1)
      return false
      }
      return true;

}

console.log(checkFPalindrome('racecar'))
