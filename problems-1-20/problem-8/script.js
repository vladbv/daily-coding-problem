// Problem 8
//
// This problem was asked by Google.
//
// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
//
// Given the root to a binary tree, count the number of unival subtrees.
//
// For example, the following tree has 5 unival subtrees:
//
//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

//Return the count of the unival subtrees

function findCountUnivalSubtrees(root) {
    return findCountUnivalSubtreesF(root);
}

// This is the slower version of counting unival subtrees
function findCountUnivalSubtreesS(root){
if(root === null){
    return 0;
}
const leftCount = findCountUnivalSubtrees(root.left);
const rightCount = findCountUnivalSubtrees(root.right);

if(isUnival(root)){
return 1 + leftCount + rightCount;
}
return leftCount + rightCount;
}

//Checking if node is unival

function isUnival(root) {
    return univalHelper(root, root.val);
}
//Checks if tree and recursively checks subtrees equals value

function univalHelper(root, val){
    if(root === null){
    return true;
    }
    if(root.val !== val){
    return false;
    }
    return univalHelper(root.left, val) && univalHelper(root.right, val);
}

// Faster version of counting unival subtrees. Sort of a combination of two recursive function in the slower version
function findCountUnivalSubtreesF(root){
    const res = [0];
    findCountUnivalSubtreesFHelper(root, res);
    return res[0];
}

function findCountUnivalSubtreesFHelper(root, res){
    if(root === null) {
    return true;
    }
    if(isLeftUnival && isRightUnival){
    if(root.left !== null && root.val !== root.left.val){
    return false;
    }
    if(root.right !== null && root.val !== root.right.val){
    return false;
    }
        res[0]++;
        return true;
    }
return false;
}
