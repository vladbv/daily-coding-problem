''' 
Problem 210

Problem Statement:

The Sieve of Eratosthenes is an ancient algorithm used to find all prime numbers up to any given limit. Write a function sieve_of_eratosthenes that takes an integer n and returns a list of all prime numbers less than or equal to n.
Example:

Input: n = 10
Output: [2, 3, 5, 7]

'''

def sieve_of_eratosthenes(n):
    primes = []
    prime_flags = [True for _ in range(n + 1)]
    p = 2
    while p * p <= n:
        if prime_flags[p] == True:
            for i in range(p * p, n + 1, p):
                prime_flags[i] = False
        p += 1

    for p in range(2, n + 1):
        if prime_flags[p]:
            primes.append(p)

    return primes

# Example usage
print(sieve_of_eratosthenes(10))  # Output: [2, 3, 5, 7]

