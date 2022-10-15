/* Problem 176

This problem was asked by Dropbox.

Given the root to a binary search tree, find the second largest node in the tree.

*/


class TreeNode {
	constructor(val){
  	this.val = val;
    this.left = null;
    this.right = null;
  }
}

/* Returning the largest node in the binary search tree
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 
 function findLargestNode(root) {
	let curr = root;
  while(curr !== null){
  	curr = curr.right;
  }
  return curr;
}

/* Returning the predecessor of the node in binary search tree 
* @param {TreeNode} root
* @param {TreeNode} maxNode
* @return {TreeNode}
*/

function findSecondLargest(root, maxNode) {
	// check if maxNode has a left child
  // if it exists, it's the second largest
  if(maxNode.left !== null){
		let curr = maxNode.left;
    while(curr.right !== null) {
    	curr = curr.right;
    }
    return curr;
  }
  
  // checking right subtree if max is last on right
  let lastRight = null;
  let curr = root;
  
  while(curr.val !== maxNode.val) {
  	if(curr.val < maxNode.val){
    	lastRight = curr;
      curr = curr.right;
    } else {
    	curr = curr.left;
    }
  }
  return lastRight;
}
