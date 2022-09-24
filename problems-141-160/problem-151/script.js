/* Problem 151

This problem was asked by Amazon.

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

*/

/* Finding the time with the most people in the building
* @param {object[]} timestamps
* @return {number[]}
*/

function findBusiestPeriod(timestamps){
	// base case
  if(timestamps.length === 0) return null;
  
  let max = Number.MIN_VALUE;
  let currCount = 0;
  let start = timestamps[0].timestamp;
  let end = -1;
  
  for(let i = 0; i < timestamps.length; i++) {
  	// Checking if people are exiting or entering
    
  	if(timestamps[i].type === 'enter') currCount += timestamps[i].count;
    if(timestamps[i].type === 'exit') currCount -= timestamps[i].count;
    
    // checking if count is larger than max
    if(currCount > max) {
    	max = currCount;
      start = timestamps[i].timestamp;
      end = timestamps[i + 1].timestamp;
    } else if(currCount === max) {
    	end = timestamps[i + 1].timestamp;
    }
  }
  return [start, end];
}

const timestamps = [
  { timestamp: 1526579928, count: 3, type: 'enter' }, // 3
  { timestamp: 1526580382, count: 2, type: 'exit' }, // 1
  { timestamp: 1526579938, count: 6, type: 'enter' }, // 7
  { timestamp: 1526579943, count: 1, type: 'enter' }, // 8
  { timestamp: 1526579944, count: 0, type: 'enter' }, // 8
  { timestamp: 1526580345, count: 5, type: 'exit' }, // 3
  { timestamp: 1526580351, count: 3, type: 'exit' } // 0
];

console.log(findBusiestPeriod(timestamps));
