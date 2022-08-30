// Problem 107
// This problem was asked by Bloomberg.
// There are N prisoners standing in a circle, waiting to be executed. The executions are carried out starting with the kth person, and removing every successive kth person going clockwise until there is no one left.
// Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.
// For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.
// Bonus: Find an O(log N) solution if k = 2.

// Time Complexity O(log N)

// Find where a prisoner should stand in order to be the last survivor
// @param {number} n number of prisoners in a circle
// @param {number} k number of every successive kth person
// @return {number}

function solveJosephusProblem(n, k) {
	return n > 1 ? ((solveJosephusProblem(n - 1, k) + k - 1) % n) + 1 : 1;
}
console.log(solveJosephusProblem(5, 2))


