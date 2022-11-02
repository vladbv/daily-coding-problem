/* Problem 194
This problem was asked by Apple.

A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

if n is even, the next number in the sequence is n / 2
if n is odd, the next number in the sequence is 3n + 1
It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

Bonus: What input n <= 1000000 gives the longest sequence?
*/

/* Testing the Collatz conjecture
 * @param {number} n
 * @return {number}
 */
 
 function collatzSeq(n) {
 	let count = 0;
  while(n > 1) {
  	n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    count += 1;
  }
  return {n, hops: count};
 }
 
 console.log(collatzSeq(100))
