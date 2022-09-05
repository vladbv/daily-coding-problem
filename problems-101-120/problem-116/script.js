// Problem 116
// This problem was asked by Yelp.

// You are given an array of integers, where each element represents the maximum number of steps that can be jumped going forward from that element. Write a function to return the minimum number of jumps you must take in order to get from the start to the end of the array.

// For example, given [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], you should return 2, as the optimal solution involves jumping from 6 to 5, and then from 5 to 9.

// Time Complexity: O(N)

// The minimum number of jumps in order to get to the end of an array
// @param {number[]} arr
// @return {number}

function maxJump(arr){
	let newMax = 0;
  let jump = 0;
  let oldMax = 0;
  
  for(let i = 0; i < arr.length - 1; i++){
  	newMax = Math.max(newMax, i + arr[i]);
    
    if(i === oldMax) {
		jump += 1;
    oldMax = newMax;
	}
  
  }
  return jump
}
console.log(maxJump([2, 3, 1, 1, 4]));
