// Problem 118
// This problem was asked by Pinterest.
// The sequence [0, 1, ..., N] has been jumbled, and the only clue you have for its order is an array representing whether each number is larger or smaller than the last. Given this information, reconstruct an array that is consistent with it. For example, given [null, +, +, -, +], you could return [1, 2, 3, 0, 4].

// We use a helper function to count symbols
// @param {string[]} arr
// @param {string} sym
// @return {string}

const plusCount = (arr, sym) => 
arr.reduce((acc, curr) => {
	return curr === sym ? acc + 1 : 0;
}, 0);

// Order an array given an operator representation
// Time Complexity O(N)
// @param {string[]} arr
// @return {number[]}

function sortJumbled(arr){
		// Base case
    if(arr.length < 0) return [];
    
    const first = arr.length - plusCount(arr, '+') - 1;
    const nums = [first];
    let large = first + 1;
    let small = first - 1;
    
    for(let i = 1; i < arr.length; i++){
			if(arr[i] === '+'){
      nums.push(large);
      large += 1;
      } else {
      	nums.push(small);
        small -= 1;
      }
	}
  return nums;
}


console.log(sortJumbled([null, '+']));
