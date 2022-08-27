// Problem 102
// This problem was asked by Google.
// Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.
// For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].

// Time Complexity: O(N ^ 2)

// Find the largest divisible subset
// @param {number[]} list
// @return {number[]}

function divisibleSubset(list){
    if(list.length < 1) {
        return [];
    }

    list.sort((a, b) => a - b);

    const dp = new Array(list.length).fill(0);
    const pre = new Array(list.length).fill(-1);
    let max = 0;
    let maxIndex = 0;
    dp[0] = 1;

    for(let i = 1; i < list.length; i++) {
        for(let j = i - 1; j >= 0; j--){
            if(list[i] % list[j] === 0) {
                if(dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    pre[i] = j;

                    if(dp[i] > max) {
                        max = dp[i];
                        maxIndex = i;
                    }
                }
            }
        }
    }

    const subset = [];
    let p = maxIndex;
    while(p !== -1) {
        subset.unshift(list[p]);
        p = pre[p];
    }
    return subset;
}

console.log(divisibleSubset([3, 5, 10, 20, 21]));
