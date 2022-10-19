/* 
Problem 180
This question was asked by Riot Games.

Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

record(timestamp): records a hit that happened at timestamp
total(): returns the total number of hits recorded
range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)
Follow-up: What if our system has limited memory?


*/
class HitCounter {

	constructor(){
  this.timestamps = [];
  }
  
  /*	Recording a hit, that happened at a timestamp
   * @param {number} timestamp
   * @return {void}
   */
   
  record(timestamp) {
  this.records.push(timestamp)
  }
  /* Returning the total number of hits recorded
   * @return {number}
   */
  total(){
  	return this.records.length
  }
  /*
   * Returning the number of hits between timestamps (inclusive)
   * @param {number} lower
   * @param {number} upper
   * @return {number}
   */	
  range(lower, upper){
  	// Time Complexity: O(N)
  	return this.timestamps.reduce((total, curr) => {
    	return curr <= upper && curr > lower ? total + 1 : total + 0;
    }, 0);
  }

}
