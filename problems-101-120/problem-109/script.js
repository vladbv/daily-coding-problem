// Problem 109
// This problem was asked by Dropbox.

// Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

// Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

// Given a column number, return its alphabetical column id
// @param {number} num
// @return {string}

function columnNum(num){
// Shifting indices by 1;
num -= 1;

// Generate an uppercase alphabet using corresponding ascii values
const upperCase = [];
const letterToNumber = digit => String.fromCharCode(digit + 65);

for(let i = 0; i < 26; i++) upperCase.push(letterToNumber(i))


// Calculating how many times a character has to be repeated
const repetitions = Math.floor(num / upperCase.length);

// Find the corresponding index of column numbers greater than 26

  const index = num % upperCase.length;

  return upperCase[index] + upperCase[index].repeat(repetitions);

}

console.log(columnNum(3))
