/* Problem 201

Given an array of integers (which may include both positive and negative numbers), find the contiguous subarray which has the largest sum. Return that sum.
Example:

Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6.
Constraints:

    The array will have at least one element.
    The array size will not exceed 10,000 elements.
    Each element in the array will be an integer within the range [-1000, 1000].
 
 */

function maxSubArraySum(arr) {
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal;
}

// Example usage
const inputArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(inputArray)); // Output: 6

