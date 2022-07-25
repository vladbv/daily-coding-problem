// Problem 68
// This problem was asked by Google.
//
// Invert a binary tree.
//
// For example, given the following tree:
//
//     a
//    / \
//   b   c
//  / \  /
// d   e f
// should become:
//
//   a
//  / \
//  c  b
//  \  / \
//   f e  d
//   O(N) Time complexity
//   O(N) Space complexity
//   N is the number of nodes in the three

// Inverting a binary tree
// @param {TreeNode} root

function inventTree(root){
    // return invertTreeR(root);
    return invertTreeI(root);
}

function invertTreeR(root) {
        if(root !== null){
            const temp = root.left;
            root.left = root.right;
            root.right = temp;
            invertTree(root.left);
            invertTree(root.right);

        }
}

// Iterative invert binary tree
// @param {TreeNode} root

function invertTreeI(root) {
    if(root !== null) {
        const queue = [];
        queue.push(root);
        while(queue.length !== 0) {
            const node = queue.shift();
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
            
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
    }
}
