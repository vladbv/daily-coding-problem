// Problem 138

// This problem was asked by Quora.

// Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.

// For example, given /usr/bin/../bin/./scripts/../, return /usr/bin/.

// Finding the shortest standardized path given an absolute pathname
// Time Complexity O(N)
// @param {string} path

function simplifyPath(path) {
	const stack = [];
  path = path.split('/');
  console.log(path)
  for(let i = 0; i < path.length; i++){
  	if(path[i] === '.' || path[i] === '') continue;
    if(path[i] === '..') stack.pop();
    else stack.push(path[i])
  }
  
  return `/${stack.join('/')}`;
}

console.log(simplifyPath('/usr/bin/../bin/./scripts/../')); 
