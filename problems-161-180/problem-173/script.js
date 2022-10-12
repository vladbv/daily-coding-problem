/* Problem 173

This problem was asked by Google.

Implement an LFU (Least Frequently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least frequently used item. If there is a tie, then the least recently used key should be removed.
get(key): gets the value at key. If no such key exists, return null.
Each operation should run in O(1) time.

*/

class LFUClass {
	constructor(limit) {
  	this.min = 0;
    this.limit = limit;
    
    // Stored map value
    this.nodeMap = new Map(); // {{key, node}, {key, node}}
    
    this.freqMap = new Map(); // {{freq, DLLNode}, {freq, DLLNode}}
    
    // Create doubly linked list
    this.head = new DLLNode(0, 0);
    this.tail = new DLLNode(0, 0);
    
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  
  
  /* 
	Sets key to value
  * @param {*} key
  * @param {*} value
  */
  
  set(key, value){
		if(this.capacity === 0) return;
    let node;
    
    if(this.nodeMap.has(key)) {
			node = this.nodeMap.get(key);
      node.value = value;
      let oldNode = this.freqMap.get(node.count);
      oldNode.remove(node);
      
      if(node.cnt === this.min && oldNode.size === 0) {
		this.min++;
  		}
  		node.count++;
      
      if(this.freqMap.get(node.count)){
      	this.freqMap.get(node.count).add(node);
      } else {
      	let newNode = new DLLNode();
        newNode.add(node);
        this.freqMap.set(node.count, newNode);
      }     
    } else {
			node = new DLLNode(key, value);
      this.nodeMap.set(key, node);
      if(this.size === this.capacity) {
      	let lastNode = this.freqMap.get(this.min);
        	this.nodeMap.delete(lastNode.removeLast().key);
          this.size--
      }
      this.size++;
      this.min = 1;
      if(this.freqMap.get(node.count)) {
				this.freqMap.get(node.count).add(node);
      } else {
      	let newNode = new DLLNode();
        newNode.add(node);
        this.freqMap.set(node.count, newNode);
      }
		}
	}
 
 /* Returning a value at key
 * @param {*} key
 * @return {*}

*/
get(key){

	const node = this.nodeMap.get(key);
  if(!node) return -1;
  
  let oldNode = this.freqMap.get(node.count);
  oldNode.remove(node);
  
  if(node.count === this.min && oldNode.size === 0){
  	this.min++;
  }
  node.count++;
  
  if(this.freqMap.get(node.count)) {
		this.freqMap.get(node.count).add(node);
  } else {
  	let newNode	= new DLLNode();
    newNode.add(node);
    this.freqMap.set(node.count, newNode);
  }
  
  return node.value;
}

/* inserting node after the head. Adding the node to the most recently used
* @param {DLLNode} node
*/
add(node) {
	node.prev = this.head;
  node.next = this.head.next;
  
  this.head.next.prev = node;
  this.head.next = node;
  this.size++;
}

/* Removing the given node from the cache
* @param {DLLNode} node
*/
remove(node){
	const {prev, next} = node;
  prev.next = next;
  next.prev = prev;
  this.size--;
}

}

class DLLNode {
	/* Creating a doubly linked list
  * @param {*} key - key stored within the node
  * @param {*} value - value stored
  */
  
  constructor(key, value) {
  	this.key = key;
    this.value = value;
    this.count = 1;
    this.next = null;
    this.prev = null;
  }
 
}
