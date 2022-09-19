// Problem 142
// This problem was asked by Stripe.

// Given a collection of intervals, fi nd the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Intervals can "touch", such as [0, 1] and [1, 2], but they won't be considered overlapping.

// For example, given the intervals [7, 9], [2, 4], [5, 8], return 1 as the last interval can be removed and the first two won't overlap.

// The intervals are not necessarily sorted in any order.

// Finding minimum number of overlapping intervals to remove
// Time Complexity O (N log(N)) - .sort(...) method
// @param {number[][]} intervals
// @return {number}

function minIntervalOverlap(intervals) {
	// base case
  if(intervals.length === 0) return 0;
  // sort interval using starting indices
  intervals.sort((a, b) => a[1] - b[1]);
  
  let count = 0;
	let pre = intervals[0];
  // starting at index 1 instead of 0 (otherwise it's counted twice)
  intervals.slice(1).forEach(item => {
  if(pre[1] > item[0]) {
  	count += 1;
  } else {
  	pre = item;
  }
  });
  return count;
}

console.log(minIntervalOverlap([[7, 9], [2, 4], [5, 8]]));
