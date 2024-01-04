'''
Problem 207

The Collatz Conjecture (also known as the 3n + 1 conjecture) is a conjecture in mathematics that concerns sequences defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows:

    If the previous term is even, the next term is one half of the previous term.
    If the previous term is odd, the next term is 3 times the previous term plus 1.

The conjecture is that no matter what value of n, the sequence will always reach 1.

Your task is to write a function collatz_sequence that takes a number n and returns the sequence of numbers produced until it reaches 1.
Example:

Input: n = 6
Output: [6, 3, 10, 5, 16, 8, 4, 2, 1]

'''

def collatz_sequence(n):
    sequence = [n]
    while n > 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        sequence.append(n)
    return sequence

# Example usage
print(collatz_sequence(6))  # Output: [6, 3, 10, 5, 16, 8, 4, 2, 1]

