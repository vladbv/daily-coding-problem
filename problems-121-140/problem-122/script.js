// Problem 122
// This problem was asked by IBM.

// Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If this is not possible, return None.

// For example, given aaabbc, you could return ababac. Given aaab, return None.

// Rearranging str so that no adjacent chars are the same
// @param {string} str
// @return {string}

function reorganizeString(str){
	const frequencyMap = freqMap(str);
	const res = new Array(str.length);
  let charIndex = 0;
  const charByFreq = Object.keys(frequencyMap).sort(
  (a, b) => frequencyMap[b] - frequencyMap[a]
  );

  for (let i = 0; i < str.length; i++) {
    const totalOccurence = frequencyMap[charByFreq[i]];

    for (let j = 0; j < totalOccurence; j++) {
      if (charIndex >= str.length) charIndex = 1;

      res[charIndex] = charByFreq[i];

      charIndex += 2;
    }
  }

  for (let i = 1; i < res.length; i++) {
    if (res[i] === res[i - 1]) {
      return 'None';
    }
  }

  return res.join('');
}

// Generating a frequency map
// @param {string} str
// @return {Object}

function freqMap(str){
	const map = {};
  for(const i of str) {
  	if(map[i] !== undefined) map[i] += 1;
    else map[i] = 1;
  }
  return map;
}
console.log(reorganizeString('aabbc')); 
