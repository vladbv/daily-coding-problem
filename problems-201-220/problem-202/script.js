/* Problem 202 
 
 Write a function that takes a string containing only three types of characters: '(', ')', '{', '}', '[' and ']', and checks if the input string is valid. An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Example:

    Input: "()"
    Output: True
    Input: "()[]{}"
    Output: True
    Input: "(]"
    Output: False
    Input: "([)]"
    Output: False
    Input: "{[]}"
    Output: True

Constraints:

    The string length will not exceed 10,000 characters.

 */

def isValid(s: str) -> bool:
	stack = []
	mapping = {")": "(", "}", "]": "["}

	for char in s:
		top_element = stack.pop() if stack else '#'
		if mapping[char] != top_element:
			return False
		else:
			stack.append(char)
	return not stack

print(isValid("()")) # Output is true
print(isValid("()[]{}")) # Output is true
print(isValid("(]")) # False
