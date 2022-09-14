// Problem 131
// This problem was asked by Facebook.

// Given a number in Roman numeral format, convert it to decimal.

// The values of Roman numerals are as follows:

/* {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
} */
// In addition, note that the Roman numeral system uses subtractive notation for numbers such as IV and XL.

// For the input XIV, for instance, you should return 14.

// Converting Roman numerals to decimal
// @param {string} numeral
// @return {number}

function formatRomanNumerals(numeral) {
	let res = 0;
  const romanMap = {
  I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  
  for(let i = 0; i < numeral.length; i++){
  if(i === numeral.length){
  	res += romanMap[numeral[i]];
    break;
 }
	const combine = numeral[i] + numeral[i + 1];
  if(romanMap[combine]){
  	res += romanMap[combine];
    i++;
    continue;
  }
  
  res += romanMap[numeral[i]]
}
return res;
 }
 
console.log(formatRomanNumerals('XIV')); 	
console.log(formatRomanNumerals('IV')); 
