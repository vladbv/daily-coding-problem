'''
Problem 208

Problem Statement:

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
Example:

Input: [3, 0, 1]
Output: 2

'''

def find_missing_number(nums):
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum

# Example usage
print(find_missing_number([3, 0, 1]))  # Output: 2

