/* Problem 183

This problem was asked by LinkedIn.

Given a string, return whether it represents a number. Here are the different kinds of numbers:

"10", a positive integer
"-10", a negative integer
"10.1", a positive real number
"-10.1", a negative real number
"1e5", a number in scientific notation
And here are examples of non-numbers:

"a"
"x 1"
"a -2"
"-"
*/

/* Determines whether a string represents a number
 * @param {string} str
 * @return {boolean}
 */
 
 function isValidNumber(str) {
 	const arr = str.trim().split('');
  
  if(arr.length === 0) return false;
  
  if(arr.length === 1 && !Number.isInteger(arr[0])) return false;

	// If the 1st char is not '+', '-', '.' or digit

	if(arr[0] !== '+' && arr[0] !== '0' && !isInteger(arr[0]) && arr[0] !== '.') return false;
  
  let flag = false;
	
  for(let i = 1; i < arr.length; i++){
  	// If any of the char does not belong to a digit, +, -, ., e
    if(
    !isInteger(arr[i]) &&
    	arr[i] !== 'e' &&
      arr[i] !== '.' &&
      arr[i] !== '+' &&
      arr[i] !== '-'
    )
    return false;
    
    if(arr[i] === '.' ){
    // checks if the char 'e' has already occured
    	if(flag === true) return false; 
      
      // If '.' is the last character.
      if (i + 1 >= arr.length) return false;

      // if '.' is not followed by a digit.
      if (!isInteger(arr[i + 1])) return false;
    } else if (arr[i] === 'e') {
      flag = true;
      
      // checking if there is no digit before 'e'.
      if (!isInteger(arr[i - 1])) return false;

      // If 'e' is the last Character
      if (i + 1 >= arr.length) return false;

      // if e is not followed by '+', '-' or a digit
      if (!isInteger(arr[i + 1]) && arr[i + 1] !== '+' && arr[i + 1] !== '-')
        return false;
        }
  }
  return true;
 }
 
/* Finds string to integer representation
 * @param {string} char
 * @return {boolean}
 */
 
function isInteger(char) {
  return Number.isInteger(parseInt(char, 10));
}

console.log(isValidNumber('10'));
