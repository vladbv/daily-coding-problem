// Problem 126
// This problem was asked by Google.

// The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

// For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

// You may also use a list or array to represent a set.

// @param {number[]} arr

const set = [1, 2, 3];
function powerSet(arr = []){
	const res = [];
  const {length} = arr;
  const numberOfCombinations = 2 ** length;
  for(let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex++){
	const subSet = [];
  for(let setElementIndex = 0; setElementIndex < arr.length; setElementIndex++) {
  	if(combinationIndex & (1 << setElementIndex)) {	
  	subSet.push(arr[setElementIndex]);  
    }
  }
  res.push(subSet);
}
	return res;
}
console.log(powerSet(set))
