// Problem 53
//
// This problem was asked by Apple.
//
// Given a tree, find the largest tree/subtree that is a BST(Binary Search Tree).
//
// Given a tree, return the size of the largest tree/subtree that is a BST.
//
// O(N) Time complexity
// O(d) Space complexity
// N is the number of nodes in the tree, d is the depth of the tree

// Returns the largest tree / subtree that is a BST
// @param {TreeNode} root
// @return {TreeNode}

function largestBST(root){
	const largest = largestBSTHelper(root);
	return largest.data;
}

// Returns the size of the largest tree / subtree that is a BST.
// @param {TreeNode} root
// @return {int}

function sizeOfLargestBST(root) {
	const largest = largestBSTHelper(root);
	return largest.size;
}

class BSTInfo {
	constructor(
	min = Number.MAX_SAFE_INTEGER,
	max = Number.MIN_SAFE_INTEGER,
	isBST = true,
	size = 0,
	data = null
	) {
	this.min = min;
	this.max = max;
	this.isBST = isBST;
	this.size = size;
	this.data = data;
	}
}

// Returns the information of the largest tree / subtree that is a BST
// @param {TreeNode} root
// @return {BSTInfo}

function largestBSTHelper(root){
	if(root === null) return new BSTInfo();

	const leftBSTInfo = largestBSTHelper(root.left);
	const rightBSTInfo = largestBSTHelper(root.right);

	if(
	!leftBSTInfo.isBST ||
	!rightBSTInfo.isBST ||
	leftBSTInfo.max > root.val ||
	rightBSTInfo.min <= root.val
	) {
	const size = Math.max(leftBSTInfo.size, rightBSTInfo.size);
	const BST = leftBSTInfo.size > rightBSTInfo.size ? leftBSTInfo.data : rightBSTInfo.data;
		// min and max do not matter because of isBST false property
		return new BSTInfo(-1, -1, false, size, BST);
	}

	const size = leftBSTInfo.size + rightBSTInfo.size
	const min  = root.left !== null ? leftBSTInfo.min : root.val;
	const max = root.right !== null ? rightBSTInfo.max : root.val;
	return new BSTInfo(min, max, true, size, root);
}
