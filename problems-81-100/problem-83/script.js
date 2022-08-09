// Problem 83
//
// This problem was asked by Microsoft.
//
// Print the nodes in a binary tree level-wise. For example, the following should print 1, 2, 3, 4, 5.
//
//   1
//  / \
// 2   3
//    / \
//   4   5
//
// O(N) Time complexity
// O(N) Space complexity
// N is the number of nodes in the tree 

// Returning the list of nodes in a binary tree level wise
// @param {TreeNode} root
// @return {number[]}

function levelOrder(root) {
    const list = [];
    if(root === null) return list;

    const queue = [];
    queue.push(root);

    while (queue.length !== 0) {
        const node = queue.shift();
        list.push(node.value);

        if(node.left !== null) queue.push(node.left);
        if(node.right !== null) queue.push(node.right);
    }
    return list;
}
