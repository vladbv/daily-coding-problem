'''
Problem 211

Problem Statement:

Given an unsorted array of integers nums, find the length of the longest consecutive elements sequence. The sequence must be strictly increasing and consecutive.
Example:

Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore, its length is 4.
Constraints:

    The array could contain duplicate elements.
    The order of elements in the output sequence does not matter.

'''

def longest_consecutive(nums):
    if not nums:
        return 0

    nums_set = set(nums)
    longest_streak = 0

    for num in nums_set:
        if num - 1 not in nums_set:
            current_num = num
            current_streak = 1

            while current_num + 1 in nums_set:
                current_num += 1
                current_streak += 1

            longest_streak = max(longest_streak, current_streak)

    return longest_streak

# Example usage
print(longest_consecutive([100, 4, 200, 1, 3, 2]))  # Output: 4

