// Problem 97
// This problem was asked by Twitter.

// Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer.
// For example, given [10, 7, 76, 415], you should return 77641510.

// Forms the largest possible integer in an array
// @param {number[]} nums list of numbers




function largestPI(list){

const sorting = list.sort((a, b) => `${b}${a}` - `${a}${b}`).join('')

return sorting === 0 ? '0' : sorting;
}

console.log(largestPI([10, 7, 76, 415]))
