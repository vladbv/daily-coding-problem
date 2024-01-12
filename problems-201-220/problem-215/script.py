'''
Problem 215

Given an array of strings strs, group the anagrams together. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example:

Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

'''

def group_anagrams(strs):
    anagrams = {}
    for s in strs:
        key = tuple(sorted(s))
        if key not in anagrams:
            anagrams[key] = []
        anagrams[key].append(s)
    return list(anagrams.values())

# Example usage
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(group_anagrams(strs))  # Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

