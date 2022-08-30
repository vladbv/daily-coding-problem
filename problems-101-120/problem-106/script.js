// Problem 106
// This problem was asked by Amazon.
// Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.
// For example, for the input [1, 2, 3, 10], you should return 7.
// Do this in O(N) time.

// Time Complexity O(N)
// Space Complexity O(N)


// Finding the smallest integer that is not the sum of a subset
// @param {number[]} nums
// @return {number}

function smallestSubsetSum(nums){
	let res = 1;
  
  // Traversing nums and incrementing if nums[i] <= res
  for(let i = 0; i < nums.length && nums[i] <= res; i++){
  res += nums[i];
  }
 return res;
}
console.log(smallestSubsetSum([1, 2, 3, 10]));
