// This problem was asked by Google.
//
// Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree.
//
// For example, given the following preorder traversal:
//
// [a, b, d, e, c, f, g]
//
// And the following inorder traversal:
//
// [d, b, e, a, f, c, g]
//
// You should return the following tree:
//
//     a
//    / \
//   b   c
//  / \ / \
// d  e f  g
//
// O(N log N) Time complexity
// O(N) Space complexity
// N is the number of elements in the traversal

class TreeNode {
    /*
     *
     *  Initializing a binary tree node with a value and/or left and right nodes
     *  @param {*} val - The value stored in the binary tree node.
     *  @param {TreeNode?} left
     *  @param {TreeNode?} right
     */

    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Reconstructing a tree given preorder and inorder traversals
// @param {string[] } preorder
// @param {string[] } inorder
// @return {TreeNode}

function constructTree(preorder, inorder){
if(preorder.length === 0 && inorder.length === 0) return null;
    return constructTreeHelper(preorder, inorder, 0, 0, preorder.length - 1);
}

// The helper function, given the index and the range from start to end index
// @param {string[]} preorder
// @param {string[]} inorder
// @param {number} i
// @param {number} start
// @param {number} end
// @return {TreeNode}

function constructTreeHelper(preorder, inorder, i, start, end){
    if (start > end || i > preorder.length) return null;

    const root = new TreeNode(preorder[i]); 

    const indexOfRoot = inorder.indexOf(preorder[i]);
    const sizeLeftSubtree = indexOfRoot - start;

    root.left = constructTreeHelper(
        preorder,
        inorder,
        i + 1,
        start,
        indexOfRoot - 1
    );

    root.right = constructTreeHelper(
        preorder,
        inorder,
        i + sizeLeftSubtree + 1,
        indexOfRoot + 1,
        end
    );
    return root;
}
