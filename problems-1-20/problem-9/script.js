function sumNonAd(nums){
    return sumNonAdC(nums);
    // return sumNonAdDP(nums);

}

// A bottom line solution by using a dp table

function sumNonAdDP(nums){
    if(nums.length === 0){
    return 0;
    }
    if(nums.length === 1){
    return Math.max(0, nums[0]);
    }
    const dp = [];

    dp[0] = Math.max(0, nums[0]);
    dp[1] = Math.max(0, nums[1]);
    for(let i = 2; i < nums.length; i++){
        const sum = nums[i] + dp[i - 2];
        // Picking the previous sum or choosing the sum
        dp[i] = Math.max(dp[i - 1], sum);
    }
    return dp[dp.length - 1];
}

// Bottom up solution

function sumNonAdC(nums){

    if(nums.length === 0){
    return 0;
    }
    if(nums.length === 1){
    return Math.max(0, nums[0]);
    }

    let prev = Math.max(0, nums[0]);
    let curr = Math.max(prev, nums[1]);

    for(let i = 2; i < nums.length; i++){
    const sum = nums[i] + prev;
        prev = curr;
        curr = Math.max(curr, sum);
    }
    return curr;
}
console.log(sumNonAd([2, 4, 6, 2, 5]));
