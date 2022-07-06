// This problem was asked by Google.
//
// Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.
//
// For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.
//
// Do this in O(N) time and O(1) space.

// We need to return the non-duplicated integer from the array
// @param {int[]} list
// @return {int}

// O(N) Time complexity
// O(1) Space complexity

function nonDup(list){
    let x1 = 0;
    let x2 = 0;
    let mask = 0;
    
    for(let i = 0; i < list.length; i++){
        const num = list[i];
        // JS Bitwise Operators

        x2 ^= x1 & num;
        x1 ^= num;
        mask = ~(x1 & x2);
        x2 &= mask;
        x1 &= mask;
    }
    return x1;
}
module.exports = nonDup;
