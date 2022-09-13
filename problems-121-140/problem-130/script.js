// Problem 130
// This problem was asked by Amazon.

// Given n numbers, find the greatest common denominator between them.

// For example, given the numbers [42, 56, 14], return 14.

function gcd(a, b){
	if(a == 0)
  return b;
  return gcd(b % a, a);
}

function findGCD(arr, n){
	let result = arr[0];
	for(let i = 1; i < n; i++){
  	result = gcd(arr[i], result);
    
    if(result === 1){
    return 1;
    }
    
  }
  return result;
}

let arr = [42, 56, 14];
let n = arr.length;

console.log(findGCD(arr, n))
