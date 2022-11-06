/* Problem 197

Difficulty: Medium
This problem was asked by PayPal.

Given a string and a number of lines k, print the string in zigzag form. In zigzag, characters are printed out diagonally from top left to bottom right until reaching the kth line, then back up to top right, and so on.

For example, given the sentence thisisazigzag and k = 4, you should print:

t     a     g
 h   s z   a
  i i   i z
   s     g
*/

 
 function convertToZigZag(phrase, k) {
	if(k === 1) return phrase;
  
  const arr = [...Array(k)].map(r => []);
  
  for(let i = 0; i < phrase.length; i++){
  	const pos = i % (2 * k - 2);
    const ii = pos < k ? pos : 2 * k - 2 - pos;
    arr[ii].push(phrase[i]);
  }
  return arr.map(r => r.join('')).join('');
}

console.log(convertToZigZag('thisisazigzag', 4));
