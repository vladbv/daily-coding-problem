/* Problem 169

This problem was asked by Facebook.

Given a positive integer n, find the smallest number of squared integers which sum to n.

For example, given n = 13, return 2 since 13 = 3^2 + 2^2 = 9 + 4.

Given n = 27, return 3 since 27 = 3^2 + 3^2 + 3^2 = 9 + 9 + 9.

Given n = 20, return 2 since 20 = 4^2 + 2^2 = 16 + 4.

*/

/* Finding the smallest number of squared integers
 * @param {number} n
 * @return {number}
 */
 
 function smallestSquareSum(n) {
 	// base case - out of range
  if(n < 3) return 0;
  
  const dp = Array(n + 1);
  
  // getMinSquares table for base case entries
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  
  for(let i = 4; i <= n; i++){
  	// assigning the worst case
    // that would be as 1 ^ 1 + 1 ^ 1 + ... until n
    dp[i] = i;
    
    // checking square cases smaller than current value
    for(let x = 1; x <= Math.ceil(i ** 2); x++){
			const square = x ** 2;
      if(square > i) break;
      dp[i] = Math.min(dp[i], 1 + dp[i - square]);
  	}
  }
  return dp[n]
 }
 
 console.log(smallestSquareSum(6))
