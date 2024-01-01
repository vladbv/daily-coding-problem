'''
Problem 204
Task: "Prime Factors"
Problem Statement:

Write a function that takes an integer n and returns a list of all its prime factors.
Example:

Input: n = 60
Output: [2, 2, 3, 5]
Explanation: The prime factors of 60 are 2, 2, 3, and 5 (since 60 = 2 * 2 * 3 * 5).
Constraints:

    2 <= n <= 10^6
'''


def prime_factors(n):
    factors = []

    while n % 2 == 0:
        factors.append(2)
        n //= 2 # Here //= is a form of compound assignment operator that combines division and assignment in one step
    # n must be odd at this point
    # So we start from 3 and increment by 2
    for i in range(3, int(n**0.5)+1, 2):
        while n % i == 0:
            factors.append(i)
            n //= i
    # If n is a prime number greater than 2
    if n > 2:
        factors.append(n)
    return factors

# Example usage
n = 50
print(prime_factors(n))
