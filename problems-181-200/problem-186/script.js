/* Problem 186 

This problem was asked by Google.

You are given given a list of rectangles represented by min and max x- and y-coordinates. Compute whether or not a pair of rectangles overlap each other. If one rectangle completely covers another, it is considered overlapping.

For example, given the following rectangles:

{
    "top_left": (1, 4),
    "dimensions": (3, 3) # width, height
},
{
    "top_left": (-1, 3),
    "dimensions": (2, 1)
},
{
    "top_left": (0, 5),
    "dimensions": (4, 3)
}
return true as the first and third rectangle overlap each other.

*/

import Graph from '../../data-structures/Graph'


/* Checking if an undirected graph is minimally connected
 * the removal of one edge makes it disconnected
 * Time Complexity: O(|V| + |E|)
 * @param {Graph} graph
 * @return {boolean}
 */
 
 function isMinimallyConnected(graph){
 	// base case
  if(graph.nodes.length <= 0) return false;
  
  const queue = [];
  const explored = [];
  
  queue.push(graph.nodes[0]);
  explored.push(graph.nodes[0]);
  
  // run BFS from the starting node
  
  while(queue.length !== 0){
  const temp = queue.shift();
  
  // checking that any node does not have a single path
  if(graph.edges[temp].length <= 1) return false;
  
  // checking unexplored edges
  
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

console.log(isMinimallyConnected(graph)); // false

graph.addEdge('e', 'b');

/**
 * a ------- b
 * |        |  \
 * |        |   \
 * |        |    \
 * c ------ d --- e
 */

console.log(isMinimallyConnected(graph)); // true
