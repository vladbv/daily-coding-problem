// Problem 123
// This problem was asked by Twitter.

// You are given an array of length 24, where each element represents the number of new subscribers during the corresponding hour. Implement a data structure that efficiently supports the following:

// update(hour: int, value: int): Increment the element at index hour by value.
// query(start: int, end: int): Retrieve the number of subscribers that have signed up between start and end (inclusive). You can assume that all values get cleared at the end of the day, and that you will not be asked for start and end values that wrap around midnight.

class TwitterSubscribers {
	// Constructor for Twitter Subscriber datastructure
  // @constructor
  
  constructor() {
	this.subscribers = new Array(24).fill(0);
	}

	// Updating the subscribers value at a certain hour
  // @param {number} hour
  // @param {number} value
  update(hour, value) {
  	if(hour > 0 && hour <= 24) this.subscribers[hour] += value;
  }
  
  // Retrieving number of subscribers between a start and end (inclusive)
  // @param {number} start
  // @param {number} end
  // @return {number}
  query(start, end) {
  	return start < end && (start > 0 && start <= 24) && (end > 0 && end <= 24)
    ? this.subscribers.slice(start, end).reduce((a, b) => {
    return a + b;
    })
    : null;
  }
}
const ts = new TwitterSubscribers();
ts.update(2, 50);
ts.update(4, 100);
ts.update(9, 10);
ts.update(100, 10);
console.log(ts.query(1, 8)); 
