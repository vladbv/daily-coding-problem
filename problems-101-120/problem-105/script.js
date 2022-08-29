// Problem 105
// This problem was asked by Stripe.
// Write a function to flatten a nested dictionary. Namespace the keys with a period.
// For example, given the following dictionary:

// Time Complexity O(N)
// N - number of keys in object

// Flatten nested dictionary, namespace keys with period
// @param {Object} obj
// @return {Object}

function flattenObject(obj, fullKey = '') {
	const consolidated = {};
  
  Object.keys(obj).forEach(key => {
  	const propName = fullKey ? `${fullKey}.${key}` : key;
    if(typeof obj[key] === 'object' && obj[key] !== null) {
	Object.assign(consolidated, flattenObject(obj[key], propName))
} else {
	consolidated[propName] = obj[key];
}
  
  })
  return consolidated;
  
}

const obj = {
key: 3,
foo: {
	a: 5,
  bar: {
  	baz:8
  }
}
};

console.log(flattenObject(obj))
