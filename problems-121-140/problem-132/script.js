// Problem 132
// This problem was asked by Oracle.

// We say a number is sparse if there are no adjacent ones in its binary representation. For example, 21 (10101) is sparse, but 22 (10110) is not. For a given input N, find the smallest sparse number greater than or equal to N.

// Do this in faster than O(N log N) time.

// Time Complexity O(N log N)

// Determining if a num's	binary representation is sparse
// @param {number} num
// @return {boolean}

function isBinarySparse(num) {
	if((num & (num >> 1)) >= 1) return false;
  
  return true;
}

console.log(isBinarySparse(21))
console.log(isBinarySparse(22))
