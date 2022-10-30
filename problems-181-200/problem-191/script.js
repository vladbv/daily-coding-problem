/* Problem 191
This problem was asked by Airbnb.

You come across a dictionary of sorted words in a language you've never seen before. Write a program that returns the correct order of letters in this language.

For example, given ['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'], you should return ['x', 'z', 'w', 'y'].
*/

/* Ordering of characters in an unknown language */

class Graph {

constructor(V) {
	this.V = V;
  this.adj = new Array(V);
  for(let i = 0; i < V; i++) this.adj[i] = [];
}

addEdge(v, w) {
	this.adj[v].push(w);
}

topologicalSortUtil(v, visited, stack) {
	// Marking the current node as visited
  visited[v] = true;
  // Recurring for all the vertices adjacent to this vertex
  this.adj[v].forEach(i => {
  	if(!visited[i]) this.topologicalSortUtil(i, visited, stack);
  })
  // Pushing the current vertex to stack which stores result
  stack.push(v);
}

// Function that does Topological Sort. It uses recursive topologicalSortUtil()

topologicalSort() {
	let stack = [];
  
  // Marking all the vertices as not visited
  let visited = new Array(this.V);
  for(let i = 0; i < this.V; i++) visited[i] = false;
  
  // Calling the recursive helper function to store
  // starting from all vertices one by one
  for(let i = 0; i < this.V; i++){
  	if(visited[i] == false)
    	this.topologicalSortUtil(i, visited, stack);
  }
  
  // Print contents of stack
  while(stack.length > 0) {
  	let x = stack.pop() + 	'a'.charCodeAt(0);
    document.write(String.fromCharCode(x) + " ");;
  }
  
}

}

// Function for finding and printing order of character from a sorted
// array of words. n is the size of words[]. alpha is a set of possible alphabets.
// This function is written in a way that only
// the first 'alpha' characters can be there in a words array. For
// example if alpha is 7, then words[] should have only 'a', 'b',
// 'c' 'd', 'e', 'f', 'g'

function printOrder(words, n, alpha){
	// Creating a graph with 'alpha' edges
  let g = new Graph(alpha);
  
  // Process all adjacent pairs of words and create a graph
  for(let i = 0; i < n - 1; i++){
  	// Taking the two current words and finding the first mismatching character
    word1 = words[i];
    word2 = words[i + 1];
    
    for(let j = 0; j < Math.min(word1.length, word2.length); j++){
    	// If a mismatching character is found, then we add an edge
      // from characterof word1 to that of word2
      if(word1[j] != word2[j]){
      	g.addEdge(word1.charCodeAt(j) - 'a'.charCodeAt(0), word2.charCodeAt(j) - 'a'.charCodeAt(0))
break;
	}
    }
    
  }
g.topologicalSort();
}

// Driver program to test above functions
words = ['caa', 'aaa', 'aab'];

printOrder(words, 3, 3)
