/* Problem 171
This problem was asked by Amazon.

Implement a bit array.

A bit array is a space efficient array that holds a value of 1 or 0 at each index.

init(size): initialize the array with size
set(i, val): updates index at i with val where val is either 1 or 0.
get(i): gets the value at index i.
*/

class BitArray{
/* Bit Array constructor */
	constructor(){
  this.arr = [];
  }
  /* Initialize the array with size 
  * @param {[type]} size
  */
	init(size) {
  	this.arr = new Array(size);
  }
  /* Updates index at i with val where val is either 1 or i
  * @param {number} i
  * @param {number} val
  */
  set(i, val){
  	this.arr[i] = val;
  }
  /* Getting the value at index i
  * @param {number} i
  * @return {number}
  */
  get(i){
	return this.arr[i]
	}
}
