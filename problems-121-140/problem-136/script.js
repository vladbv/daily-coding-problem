// Problem 136
// This problem was asked by Etsy.

// Given an array of numbers N and an integer k, your task is to split N into k partitions such that the maximum sum of any partition is minimized. Return this sum.

// For example, given N = [5, 1, 2, 7, 3, 4] and k = 3, you should return 8, since the optimal partition is [5, 1, 2], [7], [3, 4].

// Maximum sum of any partition in an array is minimized
// @param {number[]} arr
// @param {number} k
// @return {number}

function maxPartitionSum(arr, k) {
	const num = arr.length;
  const dp = new Array(num + 1).fill(0).map( () => new Array(k + 1).fill(0));
  dp[0][0] = 0;
  
  for(let i = 1; i < k + 1; i++){
  	for (let j = i; j < num + 1; j++) {
      let lastMin = arr[j - 1];
      for (let h = j; h > 0; h--) {
        lastMin = Math.min(lastMin, arr[h - 1]);
        dp[j][i] = Math.max(dp[j][i], dp[h - 1][i - 1] + lastMin);
      }
    }
  }

  return dp[num][k];
}

console.log(maxPartitionSum([5, 1, 2, 7, 3, 4], 3))
