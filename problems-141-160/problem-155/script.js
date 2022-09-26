/* Problem 155
This problem was asked by Facebook.

A graph is minimally-connected if it is connected and there is no edge that can be removed while still leaving the graph connected. For example, any binary tree is minimally-connected.

Given an undirected graph, check if the graph is minimally-connected. You can choose to represent the graph as either an adjacency matrix or adjacency list.
*/

import Graph from '../../data-structures/Graph';

/*
* Checking if an undirected graph is minimally connected
* removal of one edge makes it disconnected
* Time Complexity: O(|V| + |E|)
* @param {Graph} graph
* @return {boolean}
*/

function isMinimallyConnected(graph) {
// base case
if(graph.nodes.length <= 0) return false;
const queue = [];
const explored = [];

queue.push(graph.nodes[0]);
explored.push(graph.nodes[0]);

// running BFS from the starting node	

while(queue.length !== 0){
	const temp = queue.shift();
  
  // checking that any node doesn't have a single path
  if(graph.edges[temp].length <= 1) return false;
  
  // checking unexplored nodes
  graph.edges[temp]
  .filter(n => !explored.includes(n.node))
  .forEach(n => {
  	explored.push(n.node);
    queue.push(n.node);
  })
}
return true;
}

const graph = new Graph();

graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');

graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('d', 'b');
graph.addEdge('d', 'c');
graph.addEdge('d', 'e');

/**
 * a ------ b
 * |        |
 * |        |
 * |        |
 * c ------ d --- e
 */

console.log(isMinimallyConnected(graph)); 

graph.addEdge('e', 'b');

/**
 * a ------- b
 * |        |  \
 * |        |   \
 * |        |    \
 * c ------ d --- e
 */

console.log(isMinimallyConnected(graph)); 


