// Problem 129
// This problem was asked by Google.

// Given the sequence of keys visited by a postorder traversal of a binary search tree, reconstruct the tree.

// For example, given the sequence 2, 4, 3, 8, 7, 5, you should construct the following tree:

// Let's define the basic binary tree node structure
// @param {number} val

function TreeNode(val) {
	this.val = val;
  this.left = null;
  this.right = null;
}

// Reconstruct tree visited by post order traversal
// @param {numbers} keys
// @return {root}

function postOrderReconstruct(keys) {
	const head = new TreeNode(keys.length - 1);
  
  // stopping case
  if(keys.length <= 1) return head;
  
  let seqBreak;
  
  for(let i = 0; i < keys.length; i++){
  if(keys[i] > head.val) {
  	seqBreak = i;
    break;
 	  }
  }
  
  const leq = keys.slice(0, seqBreak + 1);
  const gt = keys.slice(seqBreak + 1, keys.length);
  
  head.left = leq ? postOrderReconstruct(leq) : null;
  head.right = gt ? postOrderReconstruct(gt) : null;
  
  return head;
  
}

console.log(postOrderReconstruct([2, 4, 3, 8, 7, 5]))
