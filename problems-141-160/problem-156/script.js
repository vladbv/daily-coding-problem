// Problem 156
/* This problem was asked by Amazon.

Given a node in a binary search tree, return the next bigger element, also known as the inorder successor.

For example, the inorder successor of 22 is 30.

   10
  /  \
 5    30
     /  \
   22    35
You can assume each node has a parent pointer.

*/

// Finding the Inorder Successor in a BST
// We will use a Parent Pointer technique

class Node {
	constructor(val) {
  	this.data = val;
    this.left = null;
    this.right = null;
    this.parent = null
  }
}

var head;

function insert(node, data) {
	if(node == null){
		return (new Node(data))
  } else {
  	var temp = null;
    
    if(data <= node.data) {
    	temp = insert(node.left, data);
      node.left = temp;
      temp.parent = node;
    } else {
    	temp = insert(node.right, data);
      node.right = temp;
      temp.parent = node;
    }
    
    // Returning the unchanged node pointer
    return node
  }
}

function inOrderSuccessor(root, n){
	if(n.right !== null) {
  	return minValue(n.right);
  }
  
  var p = n.parent;
  while(p !== null & n == p.right){
		n = p;
    p = p.parent;
	}
  return p;
}

// Returning minimum data value found in a non-empty BST

function minValue(node){
	var current = node;
  
  // looping down to find the leftmost leaf 
  
  while(current.left !== null){
		current = current.left;
	}
  return current;
}


        var root = null, temp = null,
        suc = null, min = null;
        root = insert(root, 20);
        root = insert(root, 8);
        root = insert(root, 22);
        root = insert(root, 4);
        root = insert(root, 12);
        root = insert(root, 10);
        root = insert(root, 14);
        temp = root.left.right.right;
        suc = inOrderSuccessor(root, temp);
        if (suc != null) {
            console.log("Inorder successor of " +
            temp.data + " is " + suc.data);
        } else {
            console.log(
            "Inorder successor does not exist"
            );
        }
