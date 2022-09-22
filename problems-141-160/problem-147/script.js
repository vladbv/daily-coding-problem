// Problem 147
// This problem was asked by Uber.

// Given a tree where each edge has a weight, compute the length of the longest path in the tree.

// For example, given the following tree:
/*
   a
  /|\
 b c d
    / \
   e   f
  / \
 g   h
 */
 // and the weights: a-b: 3, a-c: 5, a-d: 8, d-e: 2, d-f: 4, e-g: 1, e-h: 1, the longest path would be c -> a -> d -> f, with a length of 17.
// The path does not have to pass through the root, and each node can have any amount of children.


class Edge {
	constructor(node, weight){
  	this.node = node;
    this.weight = weight;
  }
}

class Node {
	constructor(value){
		this.val = value;
    this.edges = [];
  }
  
  addEdge(node, weight) {
  	this.edges.push(new Edge(node, weight));
    node.edges.push(new Edge(this, weight));
  }
}

// Computing the length of the longest path in the tree
// @param {Graph} graph
// @return {number}

function longestTreePath(root) {
  let maxWeight = 0;
  let maxPath = '';
  let endNode = null;
  let visited = {};
  
  // We will use DFS and modify it to traverse the way we need to
  const dfs = (node, currentPath = '', currentWeight = 0) => {
  	if(node.edges.length <= 1 && visited[node.val]) {
    	if(currentWeight > maxWeight) {
      	maxPath = currentPath + node.val;
        maxWeight = currentWeight;
        endNode = node;
      }
      return {maxPath, maxWeight, endNode};
    }
    
    node.edges.forEach( edge => {
    	if(!visited[edge.node.val]){
      	visited[edge.node.val] = true;
        dfs(
        	edge.node,
          `${currentPath + node.val }->`,
          currentWeight + edge.weight
        );
      }
    });
    return {maxPath, maxWeight, endNode};
  };
  
  // Running depth first search on root
  dfs(root);
  visited = {};
  
  // Running DFS on end node
  dfs(endNode);
  return {maxPath, maxWeight};
 
}
const A = new Node('a');
const B = new Node('b');
const C = new Node('c');
const D = new Node('d');
const E = new Node('e');
const F = new Node('f');
const G = new Node('g');
const H = new Node('h');

A.addEdge(B, 3);
A.addEdge(C, 5);
A.addEdge(D, 8);

D.addEdge(E, 2);
D.addEdge(F, 4);

E.addEdge(G, 1);
E.addEdge(H, 1);

console.log(longestTreePath(A));

