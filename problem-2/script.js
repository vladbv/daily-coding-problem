function firstMissingPositiveInteger(nums) {
     if(nums.length === 0){
        return 1;
     }
     // The Pivot value is 0
    
    const k = partition(nums, 0, nums.length - 1, 0) + 1;

    let result = k;
    for(let i = 0; i < k; i+=1){
        const indexValue = Math.abs(nums[i]);
        if(indexValue <= k){
            // It will turn negative
            if(nums[indexValue - 1] > 0)
            {
                nums[indexValue - 1] = 0 - nums[indexValue - 1];
            }
        }

    }

// The first positive index, will indicate the missing number
// We can iterate through the array length, nums.length, but this is not necessary, because k through nums.length are negative already.

for(let i = 0; i < k; i+=1){
    if(nums[i] > 0){
    result = i;
        break;
    }
}
return result + 1; // We have to add 1, because the arrays are zero indexed

}

function partition(nums, left, right, pivotValue) {
    while(left <= right) {
    while(nums[left] > pivotValue) {
        left++;
    }
    while(nums[right] < pivotValue) {
    right--;
    }
    if(left <= right) {
        swap(nums, left, right);
        left++;
        right--;
    }

    }
    return right;

}

function swap(arr, i, j){
    if(i !== j){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
