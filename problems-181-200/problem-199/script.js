/* Problem 199 
This problem was asked by Apple.

Implement the function fib(n), which returns the nth number in the Fibonacci sequence, using only O(1) space.
*/

/* Finding the nth number in Fibonacci sequence
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * @param {number} n
 * @return {number}
 */
 
 function fib(n){
 	const goldenRatio = (1 + Math.sqrt(5)) / 2;
  return Math.round(goldenRatio ** n / Math.sqrt(5))
 
 }
 
 console.log(fib(3))
