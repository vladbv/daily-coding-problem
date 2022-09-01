// Problem 110
// This problem was asked by Stripe.

// Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

// For example, given 156, you should return 3.

// Time Complexity O(N)
// N - number of binary digits


// Finding the longest run of 1s in an integer's binary representation
// @param {number} num
// @return {number}

function longestConsecutiveRun(num){
	const binary = num.toString(2);
  let currCount = 0;
  let maxCount = 0;

  for(let i = 0; i < binary.length; i++){
  	if(binary[i] === '1') currCount += 1;
    else {
    	maxCount = currCount > maxCount ? currCount : maxCount;
      currCount = 0;
    }
  }
  	return maxCount > currCount ? maxCount : currCount;
}

console.log(longestConsecutiveRun(120))
