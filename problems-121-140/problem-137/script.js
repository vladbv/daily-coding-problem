// Problem 137
// This problem was asked by Google.

// Implement a PrefixMapSum class with the following methods:

// insert(key: str, value: int): Set a given key's value in the map. If the key already exists, overwrite the value.
// sum(prefix: str): Return the sum of all values of keys that begin with a given prefix.
// For example, you should be able to run the following code:

// mapsum.insert("columnar", 3)
// assert mapsum.sum("col") == 3
// mapsum.insert("column", 2)
// assert mapsum.sum("col") == 5

class PrefixMapSum {

	constructor(){
		this.map = new Map();
	}
  
  // Set a key's value in a map
  // Override if the key exists
  // @param {(string | number)} key
  // @param {number} value
  
  insert(key, value) {
		this.map.set(key, value);
	}
  
  // Return sum of all values of keys that begin with a given prefix
  // @param {string} prefix
  // @return {number}
	sum(prefix) {
  	let sum = 0;
    this.map.forEach( (val, key) => {
   if(key.includes(prefix)) sum += val; 
    })
  return sum;
  }

}

const mapsum = new PrefixMapSum();

mapsum.insert('column1', 3);
mapsum.insert('column', 5);
console.log(mapsum.sum('col'));
