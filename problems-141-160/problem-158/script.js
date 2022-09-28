/* Problem 158

This problem was asked by Google.

Given the root of a binary search tree, and a target K, return two nodes in the tree whose sum equals K.

For example, given the following tree and K of 20

    10
   /   \
 5      15
       /  \
     11    15
Return the nodes 5 and 15.

*/

/*
 Defining a binary tree node
 function TreeNode(val) {
	this.val = val;
  this.left = this.right = null;
 }
 */
 
 /* Finding two nodes equal to k 
 @param {TreeNode} root
 @param {number} k
 @return {TreeNode[]}
 */
 
 function binaryTreeSum(root, k) {
 	const map = new Map();
  return findPair(root, k, map);
 }
 
 /*
 @param {TreeNode} root
 @param {number} k
 @param {Map<number, TreeNode>} map
 @return {TreeNode[]}
 */
 
 function findPair (root, k, map){
	if(root === null) return [];
  
  // Retrieving companion node
  
  if(map.has(k - root.val)){
  	return [map.get(root.val), map.get(k - root.val)];
  }
	// Ignoring the duplicate value nodes
  map.set(root.val, root);
  findPair(root.left, k, map);
  findPair(root.right, k, map);
  
  return [];
}

