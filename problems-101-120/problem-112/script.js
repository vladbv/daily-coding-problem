// Problem 112
// This problem was asked by Apple.
// A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.
// For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.

// Returning fixed point if one exists, or return False

// @param {number[]} list

function checkFixed(list){

if(list.length === 0){
return 'False'
}

let i = 0;
for(let i = 0; i < list.length; i++){
 if(i == list[i]) {
 
 return i;

 } else {
 finalResult = 'False'
 }
}
return finalResult;
}

console.log(checkFixed([-6, 0, 2, 40]))

