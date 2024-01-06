'''
Problem 209
Problem Statement:

A perfect number is a positive integer that is equal to the sum of its proper divisors. The smallest perfect number is 6, which is the sum of 1, 2, and 3. Write a function is_perfect_number that takes an integer n and returns True if n is a perfect number and False otherwise.
Example:

Input: n = 28
Output: True
Explanation: The divisors of 28 are 1, 2, 4, 7, 14, and 28. The sum of its proper divisors (excluding itself) is 1 + 2 + 4 + 7 + 14 = 28.
'''

def is_perfect_number(n):
    if n < 1:
        return False
    sum_divisors = 0
    for i in range(1, n):
        if n % i == 0:
            sum_divisors += i
    return sum_divisors == n

# Example usage
print(is_perfect_number(28))  # Output: True

