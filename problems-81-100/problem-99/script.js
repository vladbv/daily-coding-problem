// Problem 99
// Find an efficient algorithm to find the smallest distance (measured in number of words) between any two given words in a string.

// For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world", return 1 because there's only one word "cat" in between the two words.
     
// Finding  the smallest distance between two given words (brute force approach)
// @param {string} w1
// @param {string} w2
// @param {string} phrase
// @return {number}


function smallestDistance(w1, w2, phrase){
	
	if(w1 === w2) return 'Assuming the words are different';
  let tempHolder = [];
	let minDist = Number.MAX_VALUE;
  
  phrase.split(' ').forEach(word => {
  	if(word === w1){
			if(tempHolder.includes(w1)){
				tempHolder = [];
        tempHolder.push(word);
			} else {
				tempHolder.push(word)
        }
    } else if(word === w2) {
			minDist = Math.min(minDist, tempHolder.length - 1);
		} else if(tempHolder.includes(w1)){
    	tempHolder.push(word)
    }
  });
  return minDist;
}

console.log(smallestDistance('hello', 'world', 'dog cat hello cat dog dog hello cat world')); 
