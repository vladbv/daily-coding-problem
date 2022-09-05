// Problem 117
// This problem was asked by PayPal.

// Given a binary tree, determine whether or not it is height-balanced. A height-balanced binary tree can be defined as one in which the heights of the two subtrees of any node never differ by more than one.

// Definition for a binary tree node

function TreeNode(val){
	this.val = val;
  this.left = null;
  this.right = null;
}

// Given a binary tree, we should determine whether or not it is height-balanced
// Time Complexity: O(N)
// @param {TreeNode} root
// @return {boolean}
 
 function isHeightBalanced(root){
	const dfs = node => {
  	if(!node) return 0;
    const left = 1 + dfs(node.left);
    const right = 1 + dfs(node.right);
    if(Math.abs(left - right) > 1) return - 1;
    return Math.max(left, right);
    }
    return dfs(root) !== -1;
}
 
 const root = new TreeNode(3);
 const a = new TreeNode(9);
 const b = new TreeNode(20);
 const c = new TreeNode(15);
 const d = new TreeNode(7);
 
 root.left = a;
 root.right = b;
 b.left = c;
 b.right = d;
 
 //   3
//  / \
// 9  20
//   /  \
//  15   7

console.log(isHeightBalanced(root))
