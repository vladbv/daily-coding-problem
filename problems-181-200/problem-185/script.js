/* Problem 185

This problem was asked by Dropbox.

What does the below code snippet print out? How can we fix the anonymous functions to behave as we'd expect?

const functions = [];
for (var i = 0; i < 10; i++) {
  functions.push(() => i);
}

functions.forEach(f => console.log(f()));

*/


const functions = [];
for (var i = 0; i < 10; i++) {
(j => {
	functions.push(() => j)
})(i)
}

functions.forEach(f => console.log(f()));
