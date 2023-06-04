/* Problem 200 

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

*/

function hasPathSum(root, targetSum) {

	if(!root){
  // if the root is null, there will be no paths
		return false;
  }
 	
  if(!root.left && !root.right){
		// If there is a leaf node, check if it equals the targetSum
    
    return root.val === targetSum;
  }
  
  return (
  hasPathSum(root.left, targetSum - root.val) ||
  hasPathSum(root.right, targetSum - root.val)
  )
  
}

  // We need to define our binary tree now

class TreeNode {
	constructor(val, left, right){
		this.val = val;
    this.left = left;
    this.right = right
  }

}


const root = new TreeNode(
5, 
new TreeNode(
4, 
	new TreeNode(
		11, 
		new TreeNode(7),
    new TreeNode(2)
	)
),
new TreeNode(
8, 
	new TreeNode(
	13, new TreeNode(4, new TreeNode(null, 1))
	)
)
)

const targetSum = 22;

console.log(hasPathSum(root, targetSum))
