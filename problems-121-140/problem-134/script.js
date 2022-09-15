// Problem 134
// This problem was asked by Apple.

// Gray code is a binary code where each successive value differ in only one bit, as well as when wrapping around. Gray code is common in hardware so that we don't see temporary spurious values during transitions.

// Given a number of bits n, generate a possible gray code for it.

// For example, for n = 2, one gray code would be [00, 01, 11, 10].

// Generating a gray code
// @param {number} n - number of bits
// @return {number[]}

function generateGrayCode(n){
	if(n <= 0) return null;
  
  const arr = [];
  
  // start with one-bit pattern
  arr.push('0');
  arr.push('1');
  
  let i;
  let j;
  
  // every iteration of the loop generates 2 * i code from previous
  for(i = 2; i < 1 << n; i <<= 1){
  	// enter the previously generated codes again in arr[] in reverse
    for(let j = i - 1; j >= 0; j--) arr.push(arr[j])
    
    // append 0 to the first half
    for(j = 0; j < i; j++) arr[j] = `0${arr[j]}`;
    
    // append 1 to the second half
    for(j = i; j < 2 * i; j++) arr[j] = `1${arr[j]}`;
  }
  return arr;
}

console.log(generateGrayCode(2))
