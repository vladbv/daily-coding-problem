// Problem 89
// This problem was asked by Zillow.
// Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of 7. The first few sevenish numbers are 1, 7, 8, 49, and so on. Create an algorithm to find the nth sevenish number

// Finding the nth sevenish number
// Time complexity 
// O(N)
// @param {number} n

function findsevenish(n) {
        // base case
        if(n < 1) return 0;

       let lastIndex = 0;
       let powIndex = 0;
       const arr = new Array(n).fill(1);

    for(let i = 1; i < n; i++){
    	if(powIndex	=== lastIndex) {
			powIndex = 0;
      arr[i] = arr[lastIndex] * 7;
			lastIndex = i;
      } else {
      	arr[i] = arr[lastIndex] + arr[powIndex];
        powIndex += 1;
      }

    }

    return arr[arr.length - 1];
    }

    console.log(findsevenish(4))
 
