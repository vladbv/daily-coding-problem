// Problem 64
//
//  This question was asked by Wish
//
// Implement division of two positive integers without using the division, multiplication, or modulus operators.
// Return the quotient as an integer, ignoring the remainder.
//
// O(A/B) Time complexity
// O(1) Space complexity

// division from two integers a / b
// @param {int} a
// @param {int} b
// @return {int}

function division(a , b){
    if(b === 0) throw new Error('Cannot divide by 0');
    if(a === 0 || a === 1) return a;

    const sign = (a > 0 && b < 0) || (a < 0 && b > 0);

    let count = 0;
    a = Math.abs(a);
    b = Math.abs(b);

    while(a >= b) {
        count++;
        a -= b;
    }
    return sign ? -1 * count : count;
}
