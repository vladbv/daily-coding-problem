// Problem 66
// This problem was asked by Google.
//
// Given two strings A and B, return whether or not A can be shifted some number of times to get B.
//
// For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.
// O(M + N) Time complexity for indexOf function
// O(N) Space complexity due to string concatenation
// M is the length of A and N is the length of B

// Return whether or not A can be shifted some number of times to get B

function isShiftedString(a, b){
    if(a.length !== b.length) return false;
    return (a + a).indexOf(b) !== -1;
}

console.log(isShiftedString('abcde', 'cdeab'));
