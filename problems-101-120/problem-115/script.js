// Problem 115
// This problem was asked by Facebook.

// Given a start word, an end word, and a dictionary of valid words, find the shortest transformation sequence from start to end such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as start and end and is lowercase.

// For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop", "dat", "cat"}, return ["dog", "dot", "dat", "cat"].

// Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"}, return null as there is no possible transformation from dog to cat.

// Finding the shortest transformation sequence between 2 words
// @param {string[]} dict
// @param {string} word1
// @param {string} word2
// @return {string[]}

function shortestSeq(beginWord, endWord, wordList) {
	// base case
  if(beginWord.length !== endWord.length) return null;
  
  const seen = {};
  const queue = [beginWord];
  const final = [];
  
  while(queue.length){
  	// for every word in queue
    for(let i = 0; i < queue.length; i++) {
    	const curr = queue.shift();
      // for every word in wordlist
      for(let j = 0; j < wordList.length; j++) {
      	const word = wordList[j];
        // check if current	word in queue is adjacent to word in word list
        	if(isAdjacent(curr, word)){
          	// check if word in wordList is endword
            if(word === endWord) {
            	// add beginning and start word
							final.unshift(beginWord);
              final.push(endWord);
              return final;
						}
            
            // mark words if you've seen them
            
            if(!seen[word]) {
            seen[word] = true;
            queue.push(word);
            final.push(word)
            }
          }
      }
    }
  }
  return [];
}

// Check if words are adjacent to one another (1 away)
// @param {string} w1
// @param {string} w2
// @return {boolean}

function isAdjacent(w1, w2) {
	let count = 0;
  for(let i = 0; i < w1.length; i++){
  	if(w1[i] !== w2[i]) count++;
    if(count > 1) break;
  
  }
		return count === 1;
}
const wordList = ['dot', 'dop', 'dat', 'cat'];
const beginWord = 'dog';
const endWord = 'cat';

console.log(shortestSeq(beginWord, endWord, wordList))

