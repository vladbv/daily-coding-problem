// Problem 120
// This problem was asked by Facebook.

// Given a circular array, compute its maximum subarray sum in O(n) time. A subarray can be empty, and in this case the sum is 0.

// For example, given [8, -1, 3, 4], return 15 as we choose the numbers 3, 4, and 8 where the 8 is obtained from wrapping around.

// Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.

const allPositiveN = arr => arr.every(n => n > 0);
const allNegativeN = arr => arr.every(n => n < 0);
const sum = arr => arr.reduce((currMax, maxSoFar) => currMax + maxSoFar, 0);	


// Time Complexity O(N)
// Auxiliary Space O(1)
// Computing max of subarray sum
// @param {number[]} arr
// @return {number}

function maxSubSum(arr){
		// base case
    if(arr.length === 0 || allNegativeN(arr)) return 0;
    if(allPositiveN(arr)) return sum(arr);
    let currMax = 0;
    let maxSoFar = 0;
    
    for(let i = 0; i < arr.length; i++) {
    	currMax = Math.max(0, currMax + arr[i]);
      maxSoFar = Math.max(currMax, maxSoFar);
    }
    return maxSoFar;
    
}

console.log(maxSubSum([-4, 5, 1, 0]));
