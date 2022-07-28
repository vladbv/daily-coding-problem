// Problem 71
//
// This problem was asked by Facebook.
//
// Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0, using only mathematical or bit operations. You can assume b can only be 1 or 0.

// Returning x if b is 1 and y if b is 0
// @param {int} x
// @param {int} y
// @param {int} b
// @return {int}

function oneOrZero(x, y, b) {
    const mask = -b;
    return (x & mask) || (y & ~mask);
}
