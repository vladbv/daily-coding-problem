/* Problem 157
This problem was asked by Facebook.

Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?
*/

/* Rotating a list by k elements
* @param {numbers[]} nums
* @param {number} k
* @param {numbers[]}
*/

function rotateArray(nums, k) {
	// Base case
  if(k > nums.length || k < 0) return nums;
  
  // Unshift digits up until k to array length
  nums.unshift(...nums.splice(k));
  
  return nums;
 }
 
 console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));
