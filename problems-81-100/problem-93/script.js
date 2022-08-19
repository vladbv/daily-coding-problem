// Problem 93
// This problem was asked by MongoDB.

// Given a list of elements, find the majority element, which appears more than half the time (> floor(len(lst) / 2.0)).

// You can assume that such element exists.

// For example, given [1, 2, 1, 1, 3, 4, 0], return 1.

// Finding the majority element that appears more than half of the time
// @param {number[]} list
// @return {number[]}

function findMajorityElement(list){
	const map = new Map();
	const limit = Math.floor(list.length / 2);
	const finalValues = [];

	[...list].forEach( x => {
		if(!map.has(x)) map.set(x, 0);
		map.set(x, map.get(x) + 1);
	});

	map.forEach((value, key) => {
		if(value >= limit) finalValues.push(key);
		return false;
	});

	return finalValues;
}
console.log(findMajorityElement([1, 2, 1, 1, 3, 4, 0]));
