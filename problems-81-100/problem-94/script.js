// Problem 94
// This problem was asked by Google.
// Given a set of closed intervals, find the smallest set of numbers that covers all the intervals. If there are multiple smallest sets, return any of them.
// For example, given the intervals [0, 3], [2, 6], [3, 4], [6, 9], one set of numbers that covers all these intervals is {3, 6}.

// Finding the smallest set of numbers covering all intervals
// @param {number[]} numSet
// @return {number[]}

function minIntervalSet(numSet) {
	let i = 0;
	let min = numSet[i][0];
	let max = min;

	while(++i < numSet.length) {
	        const [x, y] = numSet[i];
		const lowIdx = x < y ? x : y;
		const highIdx = x > y ? x : y;
		max = Math.max(lowIdx, max);
		min = Math.min(highIdx, min);
	}

	return [min, max];
}
console.log(minIntervalSet([[0, 3], [2, 6], [3, 4], [6, 9]]));
