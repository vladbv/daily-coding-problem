// Problem 139
// Given a string consisting of parentheses, single digits, and positive and negative signs, convert the string into a mathematical expression to obtain the answer.

// Don't use eval or a similar built-in parser.

// For example, given '-1 + (2 + 3)', you should return 4.

// Converting and calculating a mathematical string
// @param {str} str
// @return {number}

function calculate(str){
	return new Function(`return ${str.split('').join('')}`)()

}

console.log(calculate('-1 + (2 + 3)'))
