/* Problem 172
This problem was asked by Google.

Find the minimum number of coins required to make n cents.

You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.

For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢.
*/

/* 
Defining the minimum number of coins required to make n cents
* @param {number[]} coins
* @param {number} n
* @return {number}
*/

function maxCoins(coins, n){
	const dp = [...Array(n + 1)].fill(n + 1);
  dp[0] = 0;
  
  for(let i = 1; i <= n; i++){
  	for(let j = 0; j < coins.length; j++){
    	if(coins[j] <= i){
      	dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[n] > n ? -1 : dp[n];
}


console.log(maxCoins([1, 5, 10, 25], 16));
