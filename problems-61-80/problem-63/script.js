// Problem 63
//
// This problem was asked by Amazon.
//
// Given an array of numbers, find the maximum sum of any contiguous subarray of the array.
//
// For example, given the array [34, -50, 42, 14, -5, 86],
// the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.
//
// Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.
//
// Do this in O(N) time.
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

// Returning the maximum sum of any contiguous sub array
// @param {int[]} nums
// @return {int}

function maxSumSubarray(nums){
    let maxSum = 0;
    let maxCurr = 0;

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        maxCurr = Math.max(maxCurr + num, num);
        maxSum = Math.max(maxSum, maxCurr);
    }
    return maxSum;
}
