''' Problem 206

Problem Statement:

Create a function is_palindrome that takes a string and returns True if the string is a palindrome and False otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
Example:

    Input: "Racecar"
    Output: True
    Input: "Hello"
    Output: False
    Input: "A man, a plan, a canal, Panama"
    Output: True

'''

def is_palindrome(s):
    # Remove non-alphanumeric characters and convert to lowercase
    cleaned = ''.join(char.lower() for char in s if char.isalnum())

    # Check if the cleaned string is equal to its reverse
    return cleaned == cleaned[::-1]

# Example usage
print(is_palindrome("Racecar"))  # Output: True
print(is_palindrome("Hello"))  # Output: False
print(is_palindrome("A man, a plan, a canal, Panama"))  # Output: True

