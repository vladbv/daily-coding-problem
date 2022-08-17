// Problem 91
// This problem was asked by Google.
// Given a string which we can delete at most k, return whether you can make a palindrome.
// For example, given waterrfetawx and a k of 2, you could delete f and x to get waterretaw.


// Finding whether we can make a palindrome work
// @param {string} str
// @param {number} k
// @return {Boolean}

function isKPalindrome(str, k){
	const revStr = str.split('').reverse().join('');

	const len = str.length;
  
  return isKalDP(str, revStr, len, len) <= k * 2;
}

// Dynamic programming solution
// @param {string} str
// @param {string} revStr
// @param {number} m
// @param {number} n
// @return {number}

function isKalDP(str, revStr, m, n){
	// Creating a table to store subproblems
  const dp = [...Array(n + 1)].map(() => Array(m + 1).fill(0));
  
  // Fill dp[][] in bottom-up manner
  for(let i = 0; i <= m; i++){
  	for(let j = 0; j <= n; j++){
    	if(i === 0){
			dp[i][j] = j;
			} else if(j === 0) {
      	dp[i][j] = i;
      } else if (str.charAt(i - 1) === revStr.charAt(j - 1)) {
      	dp[i][j] = dp[i - 1][j - 1];
      } else {
      	dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  
  }
  
  return dp[m][n]
}

console.log(isKPalindrome('waterrfetawx', 2))
