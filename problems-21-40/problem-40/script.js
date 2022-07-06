// Problem 40
// This problem was asked by Facebook.
//
// Given a list of integers, return the largest product that can be made by multiplying any three integers.
//
// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
//
// You can assume the list has at least three integers.
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

// Let's return the largest product that can be made by multiplying any three random integers
// @param {array} nums
// @return {int}

function maximumProduct(nums) {
    // Two ways to do that
    // 1. Multiplying the largest numbers
    // 2. The two smallest numbers multiplied with the largest number. (Assuming the two smallest are negative numbers);

    let largest = Number.MIN_SAFE_INTEGER;
    let secondLargest = Number.MIN_SAFE_INTEGER;
    let thirdLargest = Number.MIN_SAFE_INTEGER;

    let smallest = Number.MAX_SAFE_INTEGER;
    let secondSmallest = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];

        // Setting the three largest numbers
        // Moving the numbers, so that they will not get replaced
        if(num > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = num;
        } else if(num > secondLargest){
            thirdLargest = secondLargest;
            secondLargest = num;    
        } else if(num > thirdLargest) {
            thirdLargest = num;
        }   

        // Setting the two smallest integers
        if(num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest) {
            secondSmallest = num;
        }
    }

    return Math.max(
        largest * secondLargest * thirdLargest,
        smallest * secondSmallest * largest
    );
}
