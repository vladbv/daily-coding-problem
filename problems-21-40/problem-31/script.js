// This problem was asked by Google.
//
// Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k.
// If such a subset cannot be made, then return null.
//
// Integers can appear more than once in the list. You may assume all numbers in the list are positive.
//
// For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.

// @param {int[]} list
// @param {int} target
// @return {int[]?}

function subsetSum(list, target){

    if(list.length === 0) return null;

    const dp = [...Array(list.length)].map( () => Array(target + 1).fill(false));

    for (let r = 0; r < dp.length; i++){
        dp[r][0] = true;
    }

    // set the first number of the list
    
    if(list[0] <= target) dp[0][list[0]] = true;
    if(list[0] === target) return [list[0]];

    // iterate through list, starting at the fist index
    for(let i = 1; i < list.length; i++){
        const num = list[i];

        if(num === target) return [num];
        // iterate through all the subsets of 1...target
        for(let j = 1; j <= target; j++){
            dp[i][j] = dp[i - 1][j]; // Choose not to select this list[i]
            if (j - num >= 0){
                dp[i][j] = dp[i][j] || dp[i - 1][j - num]; // Checking if we should select list[i]
            }
        }
    }
    // No subset sum
    if(!dp[list.length - 1][target]) return null;

    const subset = [];
    let column = target;
    let row = list.length - 1;

    while (column !== 0) {
        const num = list[row];
        if (column === num) {
            subset.unshift(num);
            break;
        }
   
    if (dp[row - 1][column]) row--;
    else{
        subset.unshift(num);
        column -= num;
    }
    }
    return subset;
}

console.log(subsetSum([12, 1, 61, 5, 9, 2], 24))
