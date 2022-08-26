// Problem 101
// This problem was asked by Facebook.
// Given a string of parentheses, find the balanced string that can be produced from it using the minimum number of insertions and deletions. If there are multiple solutions, return any of them.
// For example, given ((), you could return (()). Given ))()(, you could return ()()()().

// Min number of insertions to balance
// @param {string} str
// @return {string} 

function minParanthesis(str) {
    const orig = str;

  // Repeatedly removing all instances of "()" until there are none left
  while (str.includes('()')) str = str.replace(/\(\)/g, '');
  
 // Counting the number of "()" until there are none left
const amtOpeningParensNeeded = (str.match(/\)/g) || []).length;
const amtClosingParensNeeded = (str.match(/\(/g) || []).length;

// Adding that many "(" and ")" to the string, respectively

return (
	'('.repeat(amtOpeningParensNeeded) + orig + ')'.repeat(amtClosingParensNeeded)
);
  }
  
  console.log(minParenthesis('(()'))
