// Problem 78
//
// This problem was asked by Microsoft.
//
// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
//
// For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.
//
// Your algorithm should run in O(n) complexity.
// O(N) Time complexity
// O(N) Space complexity
// N is the number of elements in the array

// Finds the length of the longest consecutive elements sequence
// @param {number[]} nums
// @return {number}

function longestConsecutiveSequence(nums) {
    const numSet = new Set();
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        numSet.add(num);
    }

    let longestStreak = 0;

    // visits each streak once
    numSet.forEach(num => {
        if(!numSet.has(num - 1)) {
            let currNum = num;

            while(numSet.has(currNum)){
                currNum += 1;
            }

            longestStreak = Math.max(longestStreak, currNum - num);
        }
    });
    return longestStreak;
}
