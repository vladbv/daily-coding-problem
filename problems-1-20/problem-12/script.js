// Problem 12
//
// This problem was asked by Amazon.
//
// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
// Given N, write a function that returns the number of unique ways you can climb the staircase.
// The order of the steps matters.
//
// For example, if N is 4, then there are 5 unique ways:
//
// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
//
// What if, instead of being able to climb 1 or 2 steps at a time,
// you could climb any number from a set of positive integers X?
//
// For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time

// We return the number of unique ways to climb the staircase 1 or 2 steps at a time
function climbStairsMain(stairs){

if(stairs === 1){
    return 1;
}

if(stairs === 2){
    return 2;
}

let prev = 1;
let curr = 2;
for(let i = 2; i < stairs; i++){
const sum = prev + curr;
prev = curr;
curr = sum;
}
return curr;

}

// We return the number of ways to climb the staircase of any number from a set of positive integers

function climbStairsAlt(stairs, nums){
    const dp = Array(stairs + 1).fill(0);

    for(let i = 1; i <= stairs; i++){
    // getting the total f(i - x) where x is every number in nums
    let total = 0;
    for(let j = 0; j < nums.length; j++){
    const num = nums[j];

    // check in range
    if(i - num > 0){
    total += dp[i - num];
    }

    }
        dp[i] += total;
        // if i is in nums, then increment
        if(nums.indexOf(i) !== -1){
        dp[i] += 1;
        }
    }
    // get last number in dp
    return dp[dp.length - 1];
}
console.log(climbStairsMain(4));
