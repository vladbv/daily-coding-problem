// Problem 113
// This problem was asked by Facebook.

// Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

// For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

// Follow-up: Can you do this in linear time and constant space?

// Time / Space Complexity: O(N); Constant space requires XOR knowledge
// @param {number[]} arr
// @return {number}

// Given array of integers, find the elements that appear only once

function findIndividualElements(arr){
	const hash = {};
  const ret = [];
  
  arr.forEach(elem => {
  if(!hash[elem]) {
  	hash[elem] = 1;
  } else {
  	hash[elem] += 1;
  }
  });
  
  for(const k in hash) {
  	if(hash[k] === 1){
    	ret.push(k);
    }
  }
return ret;
}

 console.log(findIndividualElements([2, 4, 6, 8, 10, 2, 6, 10])); 
