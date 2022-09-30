/* Problem 160

This problem was asked by Amazon.

Implement a stack that has the following methods:

push(val), which pushes an element onto the stack
pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.
Each method should run in constant time.
*/

class Stack {

constructor() {
	this.stack = [];
  this.maxNum = [];
}

/* Pushing the value into the current stack
* @param {number} val
*/

push(val) {
	if(this.maxNum.length === 0 || val >= this.maxNum[this.maxNum.length - 1]) {
  	this.maxNum.push(val);
  }
  this.stack.push(val);
  
}

/* Popping an element and returning the topmost element of the stack
* @return {number}
*/

pop() {
	if(this.stack.length === 0) return null;
  const val = this.stack.pop();
  
  // Checking to remove from the stack
  if(val === this.maxNum[this.maxNum.length - 1]) this.maxNum.pop();
  
  return val;
}

/* Returning the current maximum value in the stack
* @return {number}
*/
max() {
	if(this.maxNum.length === 0) return null;
  return this.maxNum[this.maxNum.length - 1];
}

}
