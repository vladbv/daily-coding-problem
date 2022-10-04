/* Problem 165

This problem was asked by Google.

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

is_locked, which returns whether the node is locked
lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.
You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.

*/


class Node {
	/*
  * Initializing a binary tree
  */
  
  constructor(val, left = null, right = null){
  	this.val = val;
    this.left = left;
    this.right = right;
    
    // Additional node info
    this.isLocked = false;
    this.parent = null;
    this.lockedChildCount = 0;
  }
  
}


/* Checking to see if we can lock or unlock this node	by checking ancestors and descendants
* @param {Node} node
* @return {boolean}
*/

const canLockOrUnlock = (node) => {
	if(node.lockedChildCount > 0) return false;
  
  // Check descendant isLocked for parent nodes
  
  let curr = node.parent;
  while(curr !== null) {
  	if(curr.isLocked) return false;
    curr = curr.parent;
   }
   return true;
}

/* Trying to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
* @param {Node} node
* @return {boolean}
*/

const lock = (node) => {
	if(node === null) return false;
  
  if(!node.isLocked && canLockOrUnlock(node)){
	node.isLocked = true;
  
  // Update count in all ancestors
  let curr = node.parent;
  	while(curr !== null) {
			curr.lockedChildCount += 1;
      curr = curr.parent;
    }
    return true;
	}
  return false;
}

/* Unlocking the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.
* @param {Node} node
* @return {boolean}
*/

const unlock = (node) => {
	if(node === null) return false;
  
  if(node.isLocked && canLockOrUnlock(node)){
  	node.isLocked = false;
    // Updating count in all ancestors
    let curr = node.parent;
    while(curr !== null) {
			curr.lockedChildCount -= 1;
      curr = curr.parent;
    }
    return true;
  }
  return false;
}
