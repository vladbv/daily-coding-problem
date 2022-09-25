// Problem 153
/*
This problem was asked by Square.

Given a string and a set of characters, return the shortest substring containing all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

If there is no substring containing all the characters in the set, return null. */

/* Returning the shortest substring containing all characters in the set
* @param {string} s
* @param {Set<string>} set
* @return {string}
*/

function minWindow(s, set) {
	if(s.length < set.size) return null;
  
  // using the two pointer technique, and keeping a window
  
  let rangeStart = -1;
  let rangeEnd = -1;
  let rangeLength = Number.MAX_SAFE_INTEGER;
  
  const freqCount = new Map();
  let start = 0;
  let end = 0;
  
  while(end < s.length) {
		const char = s.charAt(end);
    if(set.has(char)) {
			// adding to map
      if(freqCount.has(char)) {
      	freqCount.set(char, freqCount.get(char) + 1)
      } else {
      freqCount.set(char, 1);
      }
    }
    
    while (set.size === freqCount.size) {
      const currLength = end - start + 1;
      if (currLength < rangeLength) {
        rangeLength = currLength;
        rangeStart = start;
        rangeEnd = end;
      }

      const startChar = s.charAt(start);
      // remove count from startChar
      if (freqCount.has(startChar)) {
        const startCharCount = freqCount.get(startChar);

        if (startCharCount === 1) freqCount.delete(startChar);
        else {
          freqCount.set(startChar, startCharCount - 1);
        }
      }

      start++;
    }

    end++;
  }

  if (
    rangeStart === -1 &&
    rangeEnd === -1 &&
    rangeLength === Number.MAX_SAFE_INTEGER
  )
    return null;
  return s.substring(rangeStart, rangeEnd + 1);
}

console.log(minWindow('figehaeci', new Set(['a', 'e', 'i'])))
