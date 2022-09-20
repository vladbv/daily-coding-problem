// Problem 144
// This problem was asked by Bloomberg.

// Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

// For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

// Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.

// Determining if there exists a one-to-one character map
// @param {string} s1
// @param {string} s2
// @return {boolean}

function checkOneToOne(s1, s2) {
	// base case
  if(s1.length !== s2.length) return false;
  
  const map = new Map();
  
  for(let i = 0; i < s1.length; i++){
  	// add to map if not already
    if(!map.has(s1[i])) {
    	map.set(s1[i], s2[i]);
    }
    
    // checking if character properly matches
    if(map.get(s1[i]) !== s2[i]) {
    	return false
    }
  }
  return true;
}

console.log(checkOneToOne('abc', 'bcd'))
