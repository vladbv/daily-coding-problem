// Problem 84
// This problem was asked by Google.
// The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions
// required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.
// Given two strings, compute the edit distance between them.

// @param (string) a
// @param (string) b
// @return


function editDistance (a = '', b = '') {
if(a === 0 || b === 0) return null;

const track = Array(b.length + 1).fill(null).map(() =>
   Array(a.length + 1).fill(null));
   for (let i = 0; i <= a.length; i += 1) {
      track[0][i] = i;
   }
  for(let j = 0; j <= b.length; j++){
  	track[j][0] = j;
  }
     for (let j = 1; j <= b.length; j += 1) {
      for (let i = 1; i <= a.length; i += 1) {
         const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
         track[j][i] = Math.min(
            track[j][i - 1] + 1, // deletion
            track[j - 1][i] + 1, // insertion
            track[j - 1][i - 1] + indicator, // substitution
         );
      }
   }
   return track[b.length][a.length];

};

console.log(editDistance('hitting', 'kitten'))

