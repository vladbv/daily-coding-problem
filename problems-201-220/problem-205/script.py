'''
Problem 205
Write a function fizz_buzz that takes an integer n and for each number from 1 to n, prints:

    "Fizz" if the number is divisible by 3.
    "Buzz" if the number is divisible by 5.
    "FizzBuzz" if the number is divisible by both 3 and 5.
    The number itself if it is not divisible by either 3 or 5.


    Example:

Input: n = 5
Output:

1
2
Fizz
4
Buzz

'''

def fizz_buzz(n):
    for i in range(1, n):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")

        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)
fizz_buzz(16)

