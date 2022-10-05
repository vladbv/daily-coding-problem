/* Problem 166

This problem was asked by Dropbox.

Given an undirected graph G, check whether it is bipartite. Recall that a graph is bipartite if its vertices can be divided into two independent sets, U and V, such that no edge connects vertices of the same set.

*/

let V = 4; // The number of vertices


// Function returning true if graph G[V][V] is Bipartite, else return false

function isBipartite(G, src){
	// Creating a color array
  // storing colors assigned to all vertices
  // Vertex number is used as an index
  // In the array, the value is '-1'
  
  let colorArr = new Array(V);
  
  for(let i = 0; i < V; ++i){
  	colorArr[i] = -1;
    }
    
    // Assigning first color to source
    colorArr[src] = 1;
    
    // Creating a queue with FIFO method of vertex numbers
    // enqueueing source vertex for BFS traversal
    let q = [];
    q.push(src);
    
    // Run while there are vertices in the queue (Simillar in BFS)
    
    while(q.length !== 0){
    	// Dequeue a vertex from queue
      let u = q.shift();
      
      // Returning false if there is a self-loop
      if(G[u][u] == 1){
      return false;
      }
      
      // Finding all non-colored adjacent vertices
      for(let v = 0; v < V; ++v){
      	// An edge from u to v exists
        // destination v is not colored
        if(G[u][v] == 1 && colorArr[v] == -1){
        colorArr[v] = 1 - colorArr[u];
        q.push(v);
        }
        // An edge from u to v exists and destination
        // v is colored with the same color as u
        else if(G[u][v] == 1 && colorArr[v] == colorArr[u]){
        return false;
        }
      }
    }
    return true;
  
}

let G = [[0, 1, 0, 1],
	[1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0]
];


if(isBipartite(G, 0)){
console.log('Yes')
} else {
console.log('No')
}
