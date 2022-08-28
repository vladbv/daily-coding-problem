// Problem 104
// This problem was asked by Facebook.
// Given an array of numbers of length N, find both the minimum and maximum using less than 2 * (N - 2) comparisons.

// Finding the minimum and maximum using 2 * (N - 2) comparisons
// @param {number[]} arr
// @return {Object}

function findMinMax(arr){
const res = {};
let min = arr[0];
let max = arr[0];

for(let i = 0; i < arr.length; i++){
	if(i < min){
  	min = i;
    continue;
  }
  	else if(i > max){
    max = i;
    }
}

return {min, max}

}
console.log(findMinMax([4, 3, 1, 2, 5]));
