// Problem 121
// This problem was asked by Indeed.

// Given a 32-bit positive integer N, determine whether it is a power of four in faster than O(log N) time.

// Determining if a 32-bit integer is a power of four
// @param {number} n
// @return {boolean}
function isPowerOfFour(n) {
return (n & -n & 0x55555554) === n;
}
console.log(isPowerOfFour(4));
