I love the DailyCodingProblems and this is part of my daily routine to improve my skills, and learn something new.  
<h2>Problem 1</h2>

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

```javascript
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```
You can use Jest, for testing. The test should pass:

```javascript

const node = new TreeNode(
  'root',
  new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
);
test('Checking if serialization and deserialization works', () => {
expect(deserialize(serialize(node)).left.left.val).toEqual('left.left'); // Jest is used for testing if serialization and deserialization is working properly
});
```
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-1/binarytree.js)

<h2>Problem 2</h2>

This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-2/script.js)

<h2>Problem 3</h2>

This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

```javascript
function cons(a, b) {
  function pair(cb) {
    return cb(a, b);
  }
  return pair;
}
```
Implement car and cdr.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-3/script.js)

<h2>Problem 4</h2>

This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Javascript), you can assume you have access to getPointer and dereferencePointer functions that converts between nodes and memory addresses.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-4/script.js)
<h2>Problem 5</h2>

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-5/script.js)
<h2>Problem 6</h2>
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-6/script.js)
<h2>Problem 7</h2>
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-7/script.js)
<h2>Problem 8</h2>

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-8/script.js)
<h2>Problem 9</h2>
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-9/script.js)
<h2>Problem 10</h2>
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-10/script.js)
<h2>Problem 11</h2>
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-11/script.js)
<h2>Problem 12</h2>
This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-12/script.js)
<h2>Problem 13</h2>

This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-13/script.js)
<h2>Problem 14</h2>

This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-14/script.js)

<h2>Problem 15</h2>

This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-15/script.js)
<h2>Problem 16</h2>

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given an N by N matrix, rotate it by 90 degrees clockwise.

For example, given the following matrix:

[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
you should return:

[[7, 4, 1],
 [8, 5, 2],
 [9, 6, 3]]
Follow-up: What if you couldn't use any extra space?

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-16/script.js)
<h2>Problem 17</h2>
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N. You should be as efficient with time and space as possible.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-17/script.js)
<h2>Problem 18</h2>

This problem was asked by Facebook.

A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-18/script.js)
<h2>Problem 19</h2>

This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-19/script.js)

<h2>Problem 20</h2>

This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-1-20/problem-20/script.js)
<h2>Problem 21</h2>

This problem was asked by Google.

You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[0, 0, 0, 0],
[1, 1, 0, 1],
[0, 0, 0, 0],
[0, 0, 0, 0]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.

<h2>Problem 22</h2>
This problem was asked by Google.

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
<h2>Problem 23</h2>
This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
<h2>Problem 24</h2>
This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character.

For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
<h2>Problem 25</h2>
This problem was asked by Google.

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.

<h2>Problem 26</h2>
This problem was asked by Jane Street.

Suppose you are given a table of currency exchange rates, represented as a 2D array. Determine whether there is a possible arbitrage: that is, whether there is some sequence of trades you can make, starting with some amount A of any currency, so that you can end up with some amount greater than A of that currency.

There are no transaction costs and you can trade fractional quantities
<h2>Problem 27</h2>
This problem was asked by Google.

Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
<h2>Problem 28</h2>
This problem was asked by Quora.

Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word. If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one (the first one alphabetically).

For example, given the string "race", you should return "ecarace", since we can add three letters to it (which is the smallest amount to make a palindrome). There are seven other palindromes that can be made from "race" by adding three letters, but "ecarace" comes first alphabetically.

As another example, given the string "google", you should return "elgoogle".

<h2>Problem 29</h2>
This problem was asked by Microsoft.

You have an N by N board. Write a function that, given N, returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other, i.e. no two queens share the same row, column, or diagonal.
<h2>Problem 30</h2>
This problem was asked by Google.

Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.
<h2>Problem 31</h2>
This problem was asked by Google.

Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

Integers can appear more than once in the list. You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.
<h2>Problem 32</h2>
This problem was asked by Amazon.

Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".
<h2>Problem 33</h2>
This problem was asked by Facebook.

Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

It should run in O(N) time.

Hint: Make sure each one of the 52! permutations of the deck is equally likely.
<h2>Problem 34</h2>
This problem was asked by Microsoft.

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

    *
   / \
  +   +
 / \ / \
3  2 4  5
You should return 45, as it is (3 + 2) * (4 + 5).
<h2>Problem 35</h2>
This problem was asked by Facebook.

Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.
<h2>Problem 36</h2>
This problem was asked by Google.

Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree.

For example, given the following preorder traversal:

[a, b, d, e, c, f, g]

And the following inorder traversal:

[d, b, e, a, f, c, g]

You should return the following tree:

    a
   / \
  b   c
 / \ / \
d  e f  g
<h2>Problem 37</h2>
This problem was asked by Google.

Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.

For example, pow(2, 10) should return 1024.
<h2>Problem 38</h2>
This problem was asked by Microsoft.

A number is considered perfect if its digits sum up to exactly 10.

Given a positive integer n, return the n-th perfect number.

For example, given 1, you should return 19. Given 2, you should return 28.
<h2>Problem 39</h2>
This problem was asked by Two Sigma.

Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive).
<h2>Problem 40</h2>
This problem was asked by Facebook.

Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

You can assume the list has at least three integers.

<h2>Problem 41</h2>
This problem was asked by Google.

Given the head of a singly linked list, reverse it in-place.
<h2>Problem 42</h2>
This problem was asked by Snapchat.

Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.

For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
<h2>Problem 43</h2>
 This problem was asked by Google.

Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.
    a
   / \
  b   c
 /
d
<h2>Problem 44</h2>
This problem was asked Microsoft.

Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.
<h2>Problem 45</h2>
This problem was asked by Google.

Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
<h2>Problem 46</h2>
This problem was asked by Google.

Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

 - set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
 - get(key): gets the value at key. If no such key exists, return null.
Each operation should run in O(1) time.
<h2>Problem 47</h2>
This problem was asked by Facebook.

You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.

<h2>Problem 48</h2>
This problem was asked by Google.

A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.

Given N, write a function to return the number of knight's tours on an N by N chessboard.

<h2>Problem 49</h2>
This problem was asked by Google.

In a directed graph, each node is assigned an uppercase letter. We define a path's value as the number of most frequently-occurring letter along that path. For example, if a path in the graph goes through "ABACA", the value of the path is 3, since there are 3 occurrences of 'A' on the path.

Given a graph with n nodes and m directed edges, return the largest value path of the graph. If the largest value is infinite, then return null.

The graph is represented with a string and an edge list. The i-th character represents the uppercase letter of the i-th node. Each tuple in the edge list (i, j) means there is a directed edge from the i-th node to the j-th node. Self-edges are possible, as well as multi-edges.

For example, the following input graph:

```javascript 
ABACA
[(0, 1),
 (0, 2),
 (2, 3),
 (3, 4)]
```
Would have maximum value 3 using the path of vertices [0, 2, 3, 4], (A, A, C, A).

The following input graph:
```javascript
A
[(0, 0)]
```
Should return null, since we have an infinite loop.

<h2>Problem 50</h2>

This problem was asked by Facebook.

There is an N by M matrix of zeroes. Given N and M, write a function to count the number of ways of starting at the top-left corner and getting to the bottom-right corner. You can only move right or down.

For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:

Right, then down
Down, then right
Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.

<h2>Problem 51</h2>

This problem was asked by Microsoft.

Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:

```javascript
[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
```

and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.

<h2>Problem 52</h2>

This problem was asked by Microsoft.

Given an array of numbers, find the length of the longest increasing subsequence in the array. The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.

<h2>Problem 53</h2>

This problem was asked by Apple.

Given a tree, find the largest tree/subtree that is a BST.

Given a tree, return the size of the largest tree/subtree that is a BST.
<h2>Problem 54</h2>
This problem was asked by Amazon.

An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.
<h2>Problem 55</h2>
This problem was asked by Google.

Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.
<h2>Problem 56</h2>
This problem was asked by Dropbox.

Sudoku is a puzzle where you're given a partially-filled 9 by 9 grid with digits. The objective is to fill the grid with the constraint that every row, column, and box (3 by 3 subgrid) must contain all of the digits from 1 to 9.

Implement an efficient sudoku solver.

<h2>Problem 57</h2>
This problem was asked by Google.

You are given an N by M 2D matrix of lowercase letters. Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.

For example, given the following table:
```javascript
cba
daf
ghi
```
This is not ordered because of the a in the center. We can remove the second column to make it ordered:
```javascript
ca
df
gi
```
So your function should return 1, since we only needed to remove 1 column.

As another example, given the following table:
```javascript
abcdef
```
Your function should return 0, since the rows are already ordered (there's only one row).

As another example, given the following table:
```javascript
zyx
wvu
tsr
```
Your function should return 3, since we would need to remove all the columns to order it.

<h2>Problem 58</h2>
This problem was asked by Google.

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)
Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.
<h2>Problem 59</h2>

This problem was asked by Facebook.

Implement regular expression matching with the following special characters:

. (period) which matches any single character
* (asterisk) which matches zero or more of the preceding element That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.
For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular expression on the string "raymond" should return false.

Given the regular expression ". * at" and the string "chat", your function should return true. The same regular expression on the string "chats" should return false.

<h2>Problem 60</h2>

This problem was asked by Yelp.

Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
<h2>Problem 61</h2>

This problem was asked by Microsoft.

Implement a URL shortener with the following methods:

shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.
Hint: What if we enter the same URL twice?
<h2>Problem 62</h2>
This problem was asked by Facebook.

Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.

For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.

Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add up to the same sum.
<h2>Problem 63</h2>
This problem was asked by Amazon.

Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.
<h2>Problem 64</h2>

This question was asked by Wish.

Implement division of two positive integers without using the division, multiplication, or modulus operators. Return the quotient as an integer, ignoring the remainder.
<h2>Problem 65</h2>
This problem was asked by LinkedIn.

Determine whether a tree is a valid binary search tree.

A binary search tree is a tree with two children, left and right, and satisfies the constraint that the key in the left child must be less than or equal to the root and the key in the right child must be greater than or equal to the root.

<h2>Problem 66</h2>

This problem was asked by Google.

Given two strings A and B, return whether or not A can be shifted some number of times to get B.

For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.
<h2>Problem 67</h2>
This problem was asked by Google.

Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.
<h2>Problem 68</h2>

This problem was asked by Google.

Invert a binary tree.

For example, given the following tree:
```javascript
    a
   / \
  b   c
 / \  /
d   e f
```
should become:
```javascript
  a
 / \
 c  b
 \  / \
  f e  d
```
<h2>Problem 69</h2>
This problem was asked by Apple.

Suppose you have a multiplication table that is N by N. That is, a 2D array where the value at the i-th row and j-th column is (i + 1) * (j + 1) (if 0-indexed) or i * j (if 1-indexed).

Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.

For example, given N = 6 and X = 12, you should return 4, since the multiplication table looks like this:

| 1 | 2 | 3 | 4 | 5 | 6 |

| 2 | 4 | 6 | 8 | 10 | 12 |

| 3 | 6 | 9 | 12 | 15 | 18 |

| 4 | 8 | 12 | 16 | 20 | 24 |

| 5 | 10 | 15 | 20 | 25 | 30 |

| 6 | 12 | 18 | 24 | 30 | 36 |

And there are 4 12's in the table.
<h2>Problem 70</h2>
This problem was asked by Square.

Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

Write a function to simulate an unbiased coin toss.
<h2>Problem 71</h2>
This problem was asked by Facebook.

Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0, using only mathematical or bit operations. You can assume b can only be 1 or 0.
<h2>Problem 72</h2>
This problem was asked by Airbnb.

We're given a hashmap associating each courseId key with a list of courseIds values, which represents that the prerequisites of courseId are courseIds. Return a sorted ordering of courses such that we can finish all courses.

Return null if there is no such ordering.

For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []}, should return ['CSC100', 'CSC200', 'CSCS300'].

<h2>Problem 73</h2>
This problem was asked by Microsoft.

Given a number in the form of a list of digits, return all possible permutations.

For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].
<h2>Problem 74</h2>
This problem was asked by Lyft.

Given a list of integers and a number K, return which contiguous elements of the list sum to K.

For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [2, 3, 4].
<h2>Problem 75</h2>
This question was asked by Google.

Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).

<h2>Problem 76</h2>
This problem was asked by Facebook.

Given a function f, and N return a debounced f of N milliseconds.

That is, as long as the debounced f continues to be invoked, f itself will not be called for N milliseconds.
<h2>Problem 77</h2>
This problem was asked by Google.

Given a binary tree of integers, find the maximum path sum between two nodes. The path must go through at least one node, and does not need to go through the root.
<h2>Problem 78</h2>
This problem was asked by Microsoft.

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
<h2>Problem 79</h2>
This problem was asked by Google.

You are in an infinite 2D grid where you can move in any of the 8 directions:

 (x,y) to
    (x+1, y),
    (x - 1, y),
    (x, y+1),
    (x, y-1),
    (x-1, y-1),
    (x+1,y+1),
    (x-1,y+1),
    (x+1,y-1)
You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.

Example:

Input: [(0, 0), (1, 1), (1, 2)]

Output: 2

It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).
<<<<<<< HEAD
<h2>Problem 81</h2>
This problem was asked by Cisco.

Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

For example, 10101010 should be 01010101. 11100010 should be 11010001.

Bonus: Can you do this in one line?
<h2>Problem 80</h2>
This problem was asked by Pinterest.

Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

For example, [2, 0, 1, 0] returns true while [1, 1, 0, 1] returns false.
<h2>Problem 81</h2>
This problem was asked by Cisco.

Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

For example, 10101010 should be 01010101. 11100010 should be 11010001.

Bonus: Can you do this in one line?
<h2>Problem 82</h2>
This problem was asked by Google.

Given a word W and a string S, find all starting indices in S which are anagrams of W.

For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.

<h2>Problem 83</h2>
This problem was asked by Microsoft.

Print the nodes in a binary tree level-wise. For example, the following should print 1, 2, 3, 4, 5.

  1
 / \
2   3
   / \
  4   5
<h2>Problem 84</h2>
This problem was asked by Google.

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.
<h2>Problem 85</h2>

This problem was asked by Facebook.

Given a binary tree, return all paths from the root to leaves.

For example, given the tree:
```javascript
   1
  / \
 2   3
    / \
   4   5
```

it should return [[1, 2], [1, 3, 4], [1, 3, 5]].

<h2>Problem 86</h2>
This problem was asked by Amazon.

Given a string, determine whether any permutation of it is a palindrome.

For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily should return false, since there's no rearrangement that can form a palindrome.
 [Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-86/script.js)
<h2>Problem 87</h2>
This problem was asked by Two Sigma.

Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).
 [Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-87/script.js)
<h2>Problem 88</h2>
This problem was asked by Google.

On our special chessboard, two bishops attack each other if they share the same diagonal. This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.

You are given N bishops, represented as (row, column) tuples on a M by M chessboard. Write a function to count the number of pairs of bishops that attack each other. The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).

For example, given M = 5 and the list of bishops:
```javascript
(0, 0)
(1, 2)
(2, 2)
(4, 0)
```

The board would look like this:

```javascript
[b 0 0 0 0]
[0 0 b 0 0]
[0 0 b 0 0]
[0 0 0 0 0]
[b 0 0 0 0]
```
You should return 2, since bishops 1 and 3 attack each other, as well as bishops 3 and 4.

 [Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-88/script.js)
<h2>Problem 89</h2>
This problem was asked by Zillow.

Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of 7. The first few sevenish numbers are 1, 7, 8, 49, and so on. Create an algorithm to find the nth sevenish number.
 [Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-89/script.js)
<h2>Problem 90</h2>
This problem was asked by Epic.

The "look and say" sequence is defined as follows: beginning with the term 1, each subsequent term visually describes the digits appearing in the previous term. The first few terms are as follows:
```javascript
1
11
21
1211
111221
```
As an example, the fourth term is 1211, since the third term consists of one 2 and one 1.

Given an integer N, print the Nth term of this sequence.
 [Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-90/script.js)
<h2>Problem 91</h2>
This problem was asked by Google.

Given a string which we can delete at most k, return whether you can make a palindrome.

For example, given waterrfetawx and a k of 2, you could delete f and x to get waterretaw.
 [Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-91/script.js)

<h2>Problem 92</h2>
This problem was asked by Google

Given the head of a singly linked list, swap every two nodes and return its head.

For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.
 [Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-92/script.js)

<h2>Problem 93</h2>
This problem was asked by MongoDB.

Given a list of elements, find the majority element, which appears more than half the time (> floor(len(lst) / 2.0)).

You can assume that such element exists.

For example, given [1, 2, 1, 1, 3, 4, 0], return 1.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-93/script.js)

<h2>Problem 94</h2>
This problem was asked by Google.

Given a set of closed intervals, find the smallest set of numbers that covers all the intervals. If there are multiple smallest sets, return any of them.

For example, given the intervals [0, 3], [2, 6], [3, 4], [6, 9], one set of numbers that covers all these intervals is {3, 6}.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-94/script.js)

<h2>Problem 95</h2>
This problem was asked by Microsoft.

Implement the singleton pattern with a twist. First, instead of storing one instance, store two instances. And in every even call of getInstance(), return the first instance and in every odd call of getInstance(), return the second instance.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-95/script.js)

<h2>Problem 96</h2>
This problem was asked by LinkedIn.

Given a list of points, a central point, and an integer k, find the nearest k points from the central point.

For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2, return [(0, 0), (3, 1)].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-96/script.js)

<h2>Problem 97</h2>

This problem was asked by Twitter.

Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer. For example, given [10, 7, 76, 415], you should return 77641510.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-97/script.js)

<h2>Problem 98</h2>

This problem was asked by Goldman Sachs.

Given a list of numbers L, implement a method sum(i, j) which returns the sum from the sublist L[i:j] (including i, excluding j).

For example, given L = [1, 2, 3, 4, 5], sum(1, 3) should return sum([2, 3]), which is 5.

You can assume that you can do some pre-processing. sum() should be optimized over the pre-processing step.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-98/script.js)

<h2>Problem 99</h2>
Find an efficient algorithm to find the smallest distance (measured in number of words) between any two given words in a string.

For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world", return 1 because there's only one word "cat" in between the two words.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-99/script.js)

<h2>Problem 100</h2>
This problem was asked by Uber.

One way to unlock an Android phone is through a pattern of swipes across a 1-9 keypad.

For a pattern to be valid, it must satisfy the following:

All of its keys must be distinct.
It must not connect two keys by jumping over a third key, unless that key has already been used.
For example, 4 - 2 - 1 - 7 is a valid pattern, whereas 2 - 1 - 7 is not.

Find the total number of valid unlock patterns of length N, where 1 <= N <= 9.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-81-100/problem-100/script.js)

<h2>Problem 101</h2>
This problem was asked by Facebook.

Given a string of parentheses, find the balanced string that can be produced from it using the minimum number of insertions and deletions. If there are multiple solutions, return any of them.

For example, given ((), you could return (()). Given ))()(, you could return ()()()().

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-101/script.js)

<h2>Problem 102</h2>
This problem was asked by Google.

Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-102/script.js)


<h2>Problem 103</h2>.

This problem was asked by Palantir.

Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888. 678 is not a palindrome. Do not convert the integer into a string.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-103/script.js)

<h2>Problem 104</h2>
This problem was asked by Facebook.

Given an array of numbers of length N, find both the minimum and maximum using less than 2 * (N - 2) comparisons.


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-104/script.js)

<h2>Problem 105</h2>
This problem was asked by Stripe.

Write a function to flatten a nested dictionary. Namespace the keys with a period.

For example, given the following dictionary:

```javascript
{
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}
```
it should become:

```javascript
{
    "key": 3,
    "foo.a": 5,
    "foo.bar.baz": 8
}
```
You can assume keys do not contain dots in them, i.e. no clobbering will occur.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-105/script.js)

<h2>Problem 106</h2>
This problem was asked by Amazon.

Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.

For example, for the input [1, 2, 3, 10], you should return 7.

Do this in O(N) time.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-106/script.js)
<h2>Problem 107</h2>
This problem was asked by Bloomberg.

There are N prisoners standing in a circle, waiting to be executed. The executions are carried out starting with the kth person, and removing every successive kth person going clockwise until there is no one left.

Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.

Bonus: Find an O(log N) solution if k = 2.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-107/script.js)
<h2>Problem 108</h2>
This problem was asked by Nest.

Create a basic sentence checker that takes in a stream of characters and determines whether they form valid sentences. If a sentence is valid, the program should print it out.

We can consider a sentence valid if it conforms to the following rules:

The sentence must start with a capital letter, followed by a lowercase letter or a space.
All other characters must be lowercase letters, separators (,,;,:) or terminal marks (.,?,!,‽).
There must be a single space between each word.
The sentence must end with a terminal mark immediately following a word.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-108/script.js)
<h2>Problem 109</h2>
This problem was asked by Dropbox.

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-109/script.js)
<h2>Problem 110</h2>

This problem was asked by Stripe.

Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-110/script.js)
<h2>Problem 111</h2>

This problem was asked by Fitbit.

Given a linked list, rearrange the node values such that they appear in alternating low -> high -> low -> high ... form. For example, given 1 -> 2 -> 3 -> 4 -> 5, you should return 1 -> 3 -> 2 -> 5 -> 4.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-111/script.js)
<h2>Problem 112</h2>

This problem was asked by Apple.

A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-112/script.js)
<h2>Problem 113</h2>
This problem was asked by Facebook.

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

Follow-up: Can you do this in linear time and constant space?

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-113/script.js)
<h2>Problem 114</h2>
This problem was asked by Microsoft.

You have n fair coins and you flip them all at the same time. Any that come up tails you set aside. The ones that come up heads you flip again. How many rounds do you expect to play before only one coin remains?

Write a function that, given n, returns the number of rounds you'd expect to play until one coin remains.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-114/script.js)
<h2>Problem 115</h2>
This problem was asked by Facebook.

Given a start word, an end word, and a dictionary of valid words, find the shortest transformation sequence from start to end such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as start and end and is lowercase.

For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop", "dat", "cat"}, return ["dog", "dot", "dat", "cat"].

Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"}, return null as there is no possible transformation from dog to cat.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-115/script.js)

<h2>Problem 116</h2>
This problem was asked by Yelp.

You are given an array of integers, where each element represents the maximum number of steps that can be jumped going forward from that element. Write a function to return the minimum number of jumps you must take in order to get from the start to the end of the array.

For example, given [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], you should return 2, as the optimal solution involves jumping from 6 to 5, and then from 5 to 9.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-116/script.js)

<h2>Problem 117</h2>
This problem was asked by PayPal.

Given a binary tree, determine whether or not it is height-balanced. A height-balanced binary tree can be defined as one in which the heights of the two subtrees of any node never differ by more than one.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-117/script.js)

<h2>Problem 118</h2>
This problem was asked by Pinterest.

The sequence [0, 1, ..., N] has been jumbled, and the only clue you have for its order is an array representing whether each number is larger or smaller than the last. Given this information, reconstruct an array that is consistent with it. For example, given [null, +, +, -, +], you could return [1, 2, 3, 0, 4].
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-118/script.js)
<h2>Problem 119</h2>
This problem was asked by Mozilla.

A bridge in a connected (undirected) graph is an edge that, if removed, causes the graph to become disconnected. Find all the bridges in a graph.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-119/script.js)
<h2>Problem 120</h2>
This problem was asked by Facebook.

Given a circular array, compute its maximum subarray sum in O(n) time. A subarray can be empty, and in this case the sum is 0.

For example, given [8, -1, 3, 4], return 15 as we choose the numbers 3, 4, and 8 where the 8 is obtained from wrapping around.

Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-101-120/problem-120/script.js)
<h2>Problem 121</h2>
This problem was asked by Indeed.

Given a 32-bit positive integer N, determine whether it is a power of four in faster than O(log N) time.


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-121/script.js)
<h2>Problem 122</h2>
This problem was asked by IBM.

Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If this is not possible, return None.

For example, given aaabbc, you could return ababac. Given aaab, return None.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-122/script.js)
<h2>Problem 123</h2>
This problem was asked by Twitter.

You are given an array of length 24, where each element represents the number of new subscribers during the corresponding hour. Implement a data structure that efficiently supports the following:

update(hour: int, value: int): Increment the element at index hour by value.
query(start: int, end: int): Retrieve the number of subscribers that have signed up between start and end (inclusive). You can assume that all values get cleared at the end of the day, and that you will not be asked for start and end values that wrap around midnight.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-123/script.js)
<h2>Problem 124</h2>
This problem was asked by LinkedIn.

Given a linked list of numbers and a pivot k, partition the linked list so that all nodes less than k come before nodes greater than or equal to k.

For example, given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 3, the solution could be 1 -> 0 -> 5 -> 8 -> 3.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-124/script.js)
<h2>Problem 125</h2>
This problem was asked by Flipkart.

Snakes and Ladders is a game played on a 10 x 10 board, the goal of which is get from square 1 to square 100. On each turn players will roll a six-sided die and move forward a number of spaces equal to the result. If they land on a square that represents a snake or ladder, they will be transported ahead or behind, respectively, to a new square.

Find the smallest number of turns it takes to play snakes and ladders.

For convenience, here are the squares representing snakes and ladders, and their outcomes:
```javascript
snakes = {16: 6, 48: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78}

ladders = {1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100}
```

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-125/script.js)

<h2>Problem 126</h2>
This problem was asked by Google.

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-126/script.js)

<h2>Problem 127</h2>
This problem was asked by Twitter.

A permutation can be specified by an array P, where P[i] represents the location of the element at i in the permutation. For example, [2, 1, 0] represents the permutation where elements at the index 0 and 2 are swapped.

Given an array and a permutation, apply the permutation to the array. For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0], return ["c", "b", "a"].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-127/script.js)
<h2>Problem 128</h2>

This problem was asked by IBM.

Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578.
This problem was asked by IBM.


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-128/script.js)

<h2>Problem 129</h2>
This problem was asked by Google.

Given the sequence of keys visited by a postorder traversal of a binary search tree, reconstruct the tree.

For example, given the sequence 2, 4, 3, 8, 7, 5, you should construct the following tree:

```javascript
    5
   / \
  3   7
 / \   \
2   4   8

```
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-129/script.js)

<h2>Problem 130</h2>
This problem was asked by Amazon.

Given n numbers, find the greatest common denominator between them.

For example, given the numbers [42, 56, 14], return 14.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-130/script.js)


<h2>Problem 131</h2>
This problem was asked by Facebook.

Given a number in Roman numeral format, convert it to decimal.

The values of Roman numerals are as follows:

```javascript
{
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
}
```
In addition, note that the Roman numeral system uses subtractive notation for numbers such as IV and XL.

For the input XIV, for instance, you should return 14.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-131/script.js)
<h2>Problem 132</h2>
This problem was asked by Oracle.

We say a number is sparse if there are no adjacent ones in its binary representation. For example, 21 (10101) is sparse, but 22 (10110) is not. For a given input N, find the smallest sparse number greater than or equal to N.

Do this in faster than O(N log N) time.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-132/script.js)
<h2>Problem 133</h2>
Given a list, sort it using this method: reverse(lst, i, j), which reverses lst from i to j.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-133/script.js)
<h2>Problem 134</h2>
This problem was asked by Apple.

Gray code is a binary code where each successive value differ in only one bit, as well as when wrapping around. Gray code is common in hardware so that we don't see temporary spurious values during transitions.

Given a number of bits n, generate a possible gray code for it.

For example, for n = 2, one gray code would be [00, 01, 11, 10].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-134/script.js)

<h2>Problem 135</h2>

This problem was asked by Snapchat.

Given a string of digits, generate all possible valid IP address combinations.

IP addresses must follow the format A.B.C.D, where A, B, C, and D are numbers between 0 and 255. Zero-prefixed numbers, such as 01 and 065, are not allowed, except for 0 itself.

For example, given 2542540123, you should return ['254.25.40.123', '254.254.0.123'].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-135/script.js)

<h2>Problem 136</h2>
This problem was asked by Etsy.

Given an array of numbers N and an integer k, your task is to split N into k partitions such that the maximum sum of any partition is minimized. Return this sum.

For example, given N = [5, 1, 2, 7, 3, 4] and k = 3, you should return 8, since the optimal partition is [5, 1, 2], [7], [3, 4].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-136/script.js)

<h2>Problem 137</h2>

This problem was asked by Google.

Implement a PrefixMapSum class with the following methods:

insert(key: str, value: int): Set a given key's value in the map. If the key already exists, overwrite the value.
sum(prefix: str): Return the sum of all values of keys that begin with a given prefix.
For example, you should be able to run the following code:
```javascript
mapsum.insert("columnar", 3)
assert mapsum.sum("col") == 3
```

```javascript
mapsum.insert("column", 2)
assert mapsum.sum("col") == 5
```

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-137/script.js)

<h2>Problem 138</h2>

This problem was asked by Quora.

Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.

For example, given /usr/bin/../bin/./scripts/../, return /usr/bin/.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-138/script.js)



<h2>Problem 139</h2>

Given a string consisting of parentheses, single digits, and positive and negative signs, convert the string into a mathematical expression to obtain the answer.

Don't use eval or a similar built-in parser.

For example, given '-1 + (2 + 3)', you should return 4.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-139/script.js)

<h2>Problem 140</h2>
This problem was asked by Google.

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-121-140/problem-140/script.js)

<h2>Problem 141</h2>

This problem was asked by Amazon.

Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

For example, this matrix has 4 islands.

```javascript
1 0 0 0 0
0 0 1 1 0
0 1 1 0 0
0 0 0 0 0
1 1 0 0 1
1 1 0 0 1
```

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-141/script.js)

<h2>Problem 142</h2>
This problem was asked by Stripe.

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Intervals can "touch", such as [0, 1] and [1, 2], but they won't be considered overlapping.

For example, given the intervals [7, 9], [2, 4], [5, 8], return 1 as the last interval can be removed and the first two won't overlap.

The intervals are not necessarily sorted in any order.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-142/script.js)

<h2>Problem 143</h2>
This problem was asked by Two Sigma.

Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.

The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.

The second game: same, except that the stopping condition is a five followed by a five.

Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-143/script.js)

<h2>Problem 144</h2>
This problem was asked by Bloomberg.

Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-144/script.js)

<h2>Problem 145</h2>

This problem was asked by Slack.

You are given an N by M matrix of 0s and 1s. Starting from the top left corner, how many ways are there to reach the bottom right corner?

You can only move right and down. 0 represents an empty space while 1 represents a wall you cannot walk through.

For example, given the following matrix:
```javascript
[[0, 0, 1],
 [0, 0, 1],
 [1, 0, 0]]
```
Return 2, as there are only two ways to get to the bottom right:
```javascript
Right, down, down, right
Down, right, down, right
```
The top left corner and bottom right corner will always be 0.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-145/script.js)

<h2>Problem 146</h2>
This problem was asked by Google.

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string acbbac, return b. Given the string abcdef, return null.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-146/script.js)


<h2>Problem 147</h2>

This problem was asked by Uber.

Given a tree where each edge has a weight, compute the length of the longest path in the tree.

For example, given the following tree:

```javascript
   a
  /|\
 b c d
    / \
   e   f
  / \
 g   h
```

and the weights: a-b: 3, a-c: 5, a-d: 8, d-e: 2, d-f: 4, e-g: 1, e-h: 1, the longest path would be c -> a -> d -> f, with a length of 17.

The path does not have to pass through the root, and each node can have any amount of children.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-147/script.js)

<h2>Problem 148</h2>
This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

```javascript
2
1.5
2
3.5
2
2
2
```

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-148/script.js)

<h2>Problem 149</h2>

This problem was asked by Facebook.

Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.

For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport YUL, you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport COM, you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport A, you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-149/script.js)

<h2>Problem 150</h2>

The Tower of Hanoi is a puzzle game with three rods and n disks, each a different size.

All the disks start off on the first rod in a stack. They are ordered by size, with the largest disk on the bottom and the smallest one at the top.

The goal of this puzzle is to move all the disks from the first rod to the last rod while following these rules:

You can only move one disk at a time.
A move consists of taking the uppermost disk from one of the stacks and placing it on top of another stack.
You cannot place a larger disk on top of a smaller disk.
Write a function that prints out all the steps necessary to complete the Tower of Hanoi. You should assume that the rods are numbered, with the first rod being 1, the second (auxiliary) rod being 2, and the last (goal) rod being 3.

For example, with n = 3, we can do this in 7 moves:

```javascript
Move 1 to 3
Move 1 to 2
Move 3 to 2
Move 1 to 3
Move 2 to 1
Move 2 to 3
Move 1 to 3
```
![tower of hanoi](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-150/tower-of-hanoi.png?raw=true);


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-150/script.js)

<h2>Problem 151</h2>

This problem was asked by Amazon.

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-151/script.js)

<h2>Problem 152</h2>

This problem was asked by Alibaba.

Given an even number (greater than 2), return two prime numbers whose sum will be equal to the given number.

A solution will always exist. See Goldbach’s conjecture.

Example:
```javascript
Input: 4
Output: 2 + 2 = 4
```
If there are more than one solution possible, return the lexicographically smaller solution.

If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then

[a, b] < [c, d] If a < c OR a==c AND b < d.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-152/script.js)


<h2>Problem 153</h2>
This problem was asked by Square.

Given a string and a set of characters, return the shortest substring containing all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

If there is no substring containing all the characters in the set, return null.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-153/script.js)

<h2>Problem 154</h2>
This problem was asked by Google.

Given two rectangles on a 2D graph, return the area of their intersection. If the rectangles don't intersect, return 0.

For example, given the following rectangles:

```javascript
{
    "top_left": [1, 4],
    "dimensions": [3, 3] # width, height
}
```
and
```javascript
{
    "top_left": [0, 5],
    "dimensions": [4, 3] # width, height
}
```

return 6.


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-154/script.js)


<h2>Problem 155</h2>
This problem was asked by Facebook.

A graph is minimally-connected if it is connected and there is no edge that can be removed while still leaving the graph connected. For example, any binary tree is minimally-connected.

Given an undirected graph, check if the graph is minimally-connected. You can choose to represent the graph as either an adjacency matrix or adjacency list.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-155/script.js)

<h2>Problem 156</h2>
This problem was asked by Amazon.

Given a node in a binary search tree, return the next bigger element, also known as the inorder successor.

For example, the inorder successor of 22 is 30.

```javascript
   10
  /  \
 5    30
     /  \
   22    35
```
You can assume each node has a parent pointer.


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-156/script.js)

<h2>Problem 157</h2>

This problem was asked by Facebook.

Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-157/script.js)

<h2>Problem 158</h2>

This problem was asked by Google.

Given the root of a binary search tree, and a target K, return two nodes in the tree whose sum equals K.

For example, given the following tree and K of 20

```javascript
    10
   /   \
 5      15
       /  \
     11    15
```
Return the nodes 5 and 15.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-158/script.js)

<h2>Problem 159</h2>
This problem was asked by Google.

Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

```javascript

dir
    subdir1
    subdir2
        file.ext
```
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

```javascript
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
```

The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-159/script.js)

<h2>Problem 160</h2>
This problem was asked by Amazon.

Implement a stack that has the following methods:

push(val), which pushes an element onto the stack
pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.
Each method should run in constant time.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-141-160/problem-160/script.js)

<h2>Problem 161</h2>
This problem was asked by Amazon.

An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-161/script.js)

<h2>Problem 162</h2>
This question was asked by Apple.

Given a binary tree, find a minimum path sum from root to a leaf.

For example, the minimum path in this tree is [10, 5, 1, -1], which has sum 15.

```javascript
  10
 /  \
5    5
 \     \
   2    1
       /
     -1
```
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-162/script.js)

<h2>Problem 163</h2>

This problem was asked by Google.

Implement a file syncing algorithm for two computers over a low-bandwidth network. What if we know the files in the two computers are mostly the same?

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-163/script.js)

<h2>Problem 164</h2>
This question was asked by Google.

Given an N by M matrix consisting only of 1's and 0's, find the largest rectangle containing only 1's and return its area.

For example, given the following matrix:

```javascript
[[1, 0, 0, 0],
 [1, 0, 1, 1],
 [1, 0, 1, 1],
 [0, 1, 0, 0]]
```
 Return 4.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-164/script.js)

<h2>Problem 165</h2>

This problem was asked by Google.

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

is_locked, which returns whether the node is locked
lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.
You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-165/script.js)

<h2>Problem 166</h2>
This problem was asked by Dropbox.

Given an undirected graph G, check whether it is bipartite. Recall that a graph is bipartite if its vertices can be divided into two independent sets, U and V, such that no edge connects vertices of the same set.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-166/script.js)

<h2>Problem 167</h2>

This problem was asked by Google.

Given an array of numbers and an index i, return the index of the nearest larger number of the number at index i, where distance is measured in array indices.

For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

If two distances to larger numbers are the equal, then return any one of them. If the array at i doesn't have a nearest larger integer, then return null.

Follow-up: If you can preprocess the array, can you do this in constant time?

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-167/script.js)

<h2>Problem 168</h2>

This problem was asked by Palantir.

Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

```javascript

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly

```

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-168/script.js)

<h2>Problem 169</h2>

This problem was asked by Facebook.

Given a positive integer n, find the smallest number of squared integers which sum to n.

For example, given n = 13, return 2 since 13 = 3^2 + 2^2 = 9 + 4.

Given n = 27, return 3 since 27 = 3^2 + 3^2 + 3^2 = 9 + 9 + 9.

Given n = 20, return 2 since 20 = 4^2 + 2^2 = 16 + 4.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-169/script.js)

<h2>Problem 170</h2>

This problem was asked by Microsoft.

Given an array of positive integers, divide the array into two subsets such that the difference between the sum of the subsets is as small as possible.

For example, given [5, 10, 15, 20, 25], return the sets {10, 25} and {5, 15, 20}, which has a difference of 5, which is the smallest possible difference.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-170/script.js)

<h2>Problem 171</h2>
This problem was asked by Amazon.

Implement a bit array.

A bit array is a space efficient array that holds a value of 1 or 0 at each index.

init(size): initialize the array with size
set(i, val): updates index at i with val where val is either 1 or 0.
get(i): gets the value at index i.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-171/script.js)

<h2>Problem 172</h2>
This problem was asked by Google.

Find the minimum number of coins required to make n cents.

You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.

For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-172/script.js)

<h2>Problem 173</h2>
This problem was asked by Google.

Implement an LFU (Least Frequently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least frequently used item. If there is a tie, then the least recently used key should be removed.
get(key): gets the value at key. If no such key exists, return null.

Each operation should run in O(1) time.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-173/script.js)

<h2>Problem 174</h2>
This problem was asked by Coursera.

Given a 2D board of characters and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example, given the following board:

```javascript
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
```

exists(board, "ABCCED") returns true
exists(board, "SEE") returns true
exists(board, "ABCB") returns false

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-174/script.js)

<h2>Problem 175</h2>

This problem was asked by Dropbox.

Conway's Game of Life takes place on an infinite two-dimensional board of square cells. Each cell is either dead or alive, and at each tick, the following rules apply:

Any live cell with less than two live neighbours dies.
Any live cell with two or three live neighbours remains living.
Any live cell with more than three live neighbours dies.
Any dead cell with exactly three live neighbours becomes a live cell.
A cell neighbours another cell if it is horizontally, vertically, or diagonally adjacent.

Implement Conway's Game of Life. It should be able to be initialized with a starting list of live cell coordinates and the number of steps it should run for. Once initialized, it should print out the board state at each step. Since it's an infinite board, print out only the relevant coordinates, i.e. from the top-leftmost live cell to bottom-rightmost live cell.

You can represent a live cell with an asterisk ( * ) and a dead cell with a dot (.).


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-175/script.js)
<h2>Problem 176</h2>

This problem was asked by Dropbox.

Given the root to a binary search tree, find the second largest node in the tree.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-176/script.js)
<h2>Problem 177</h2>

This problem was asked by Google.

Given a string of words delimited by spaces, reverse the words in string. For example, given hello world here, return here world hello

Follow-up: given a mutable string representation, can you perform this operation in-place?

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-177/script.js)

<h2>Problem 178</h2>
This problem was asked by Microsoft.

Implement 3 stacks using a single list:

```javascript
class Stack:
    def __init__(self):
        self.list = []

    def pop(self, stack_number):
        pass

    def push(self, item, stack_number):
        pass
```


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-178/script.js)

<h2>Problem 179</h2>
This problem was asked by Google.

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-179/script.js)

<h2>Problem 180</h2>
This question was asked by Riot Games.

Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

```javascript
record(timestamp): records a hit that happened at timestamp
total(): returns the total number of hits recorded
range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)
Follow-up: What if our system has limited memory?
```

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-161-180/problem-180/script.js)

<h2>Problem 181</h2>

This problem was asked by Google.

We can determine how "out of order" and array A is by counting the number of inversions it has. Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller elements appears after the larger element

Given an array, account the number of inversions it has. Do this faster than O(N^2) time.

You may assume each element in the array is distinct.

For example a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions (2,1), (4,1) and (4,3). The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-181/script.js)

<h2>Problem 182</h2>
This problem was asked by Jane Street.

Generate a finite, but an arbitrarily large binary tree quickly in O(1).

That is, generate() should return a tree whose size is unbounded but finite.
[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-182/script.js)

<h2>Problem 183</h2>

This problem was asked by LinkedIn.

Given a string, return whether it represents a number. Here are the different kinds of numbers:

- "10", a positive integer
- "-10", a negative integer
- "10.1", a positive real number
- "-10.1", a negative real number
- "1e5", a number in scientific notation

And here are examples of non-numbers:

- "a"
- "x 1"
- "a -2"
- "-"

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-183/script.js)

<h2>Problem 184</h2>

This problem was asked by Facebook.

You have a large array with most of the elements as zero.

Use a more space-efficient data structure, SparseArray, that implements the same interface:

init(arr, size): initialize with the original large array and size.
set(i, val): updates index at i with val.
get(i): gets the value at index i.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-184/script.js)


<h2>Problem 185</h2>

This problem was asked by Dropbox.

What does the below code snippet print out? How can we fix the anonymous functions to behave as we'd expect?

```javascript
const functions = [];
for (var i = 0; i < 10; i++) {
  functions.push(() => i);
}

functions.forEach(f => console.log(f()));
```

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-185/script.js)

<h2>Problem 186</h2>


This problem was asked by Google.

You are given given a list of rectangles represented by min and max x- and y-coordinates. Compute whether or not a pair of rectangles overlap each other. If one rectangle completely covers another, it is considered overlapping.

For example, given the following rectangles:

```javascript
{
    "top_left": (1, 4),
    "dimensions": (3, 3) # width, height
},
{
    "top_left": (-1, 3),
    "dimensions": (2, 1)
},
{
    "top_left": (0, 5),
    "dimensions": (4, 3)
}
```


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-186/script.js)

<h2>Problem 187</h2>

This problem was asked by Google.

Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.

Recall that you can only push(item) or pop() from a stack, and enqueue(item) or dequeue() from a queue.

For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].

Hint: Try working backwards from the end state.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-187/script.js)

<h2>Problem 188</h2>
This problem was asked by Amazon.

Given a pivot x, and a list lst, partition the list into three parts.

The first part contains all elements in lst that are less than x The second part contains all elements in lst that are equal to x The third part contains all elements in lst that are larger than x Ordering within a part can be arbitrary.

For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-188/script.js)
<h2>Problem 189</h2>

This problem was asked by YouTube.

Write a program that computes the length of the longest common subsequence of three given strings. For example, given epidemiologist, refrigeration, and supercalifragilisticexpialodocious, it should return 5, since the longest common subsequence is eieio.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-189/script.js)
<h2>Problem 190</h2>
This problem was asked by Google.

You are given a starting state start, a list of transition probabilities for a Markov chain, and a number of steps num_steps. Run the Markov chain starting from start for num_steps and compute the number of times we visited each state.

For example, given the starting state a, number of steps 5000, and the following transition probabilities:

```javascript
[
  ['a', 'a', 0.9],
  ['a', 'b', 0.075],
  ['a', 'c', 0.025],
  ['b', 'a', 0.15],
  ['b', 'b', 0.8],
  ['b', 'c', 0.05],
  ['c', 'a', 0.25],
  ['c', 'b', 0.25],
  ['c', 'c', 0.5]
]
```

One instance of running this Markov chain might produce { 'a': 3012, 'b': 1656, 'c': 332 }.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-190/script.js)
<h2>Problem 191</h2>

This problem was asked by Airbnb.

You come across a dictionary of sorted words in a language you've never seen before. Write a program that returns the correct order of letters in this language.

For example, given ['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'], you should return ['x', 'z', 'w', 'y'].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-191/script.js)
<h2>Problem 192</h2>
This problem was asked by Microsoft.

Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string abracadabra and the pattern abr, you should return [0, 7].

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-192/script.js)

<h2>Problem 193</h2>
This problem was asked by Apple.

Given the root of a binary tree, find the most frequent subtree sum. The subtree sum of a node is the sum of all values under a node, including the node itself.

For example, given the following tree:

```javascript
  5
 / \
2  -5
```

Return 2 as it occurs twice: once as the left leaf, and once as the sum of 2 + 5 - 5.


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-193/script.js)


<h2>Problem 194</h2>

This problem was asked by Apple.

A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

if n is even, the next number in the sequence is n / 2
if n is odd, the next number in the sequence is 3n + 1
It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

Bonus: What input n <= 1000000 gives the longest sequence?

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-194/script.js)

<h2>Problem 195</h2>

This problem was asked by Amazon.

A tree is symmetric if its data and shape remain unchanged when it is reflected about the root node. The following tree is an example:

```javascript
        4
      / | \
    3   5   3
  /           \
9              9
```
Given a k-ary tree, determine whether it is symmetric.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-195/script.js)

<h2>Problem 196</h2>

This problem was asked by Square.

In front of you is a row of N coins, with values v1, v1, ..., vn.

You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row, removing it from the row, and receiving the value of the coin.

Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-196/script.js)

<h2>Problem 197</h2>
This problem was asked by PayPal.

Given a string and a number of lines k, print the string in zigzag form. In zigzag, characters are printed out diagonally from top left to bottom right until reaching the kth line, then back up to top right, and so on.

For example, given the sentence thisisazigzag and k = 4, you should print:

```javascript
t     a     g
 h   s z   a
  i i   i z
   s     g
```

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-197/script.js)

<h2>Problem 198</h2>

This problem was asked by Goldman Sachs.

You are given N identical eggs and access to a building with k floors. Your task is to find the lowest floor that will cause an egg to break, if dropped from that floor. Once an egg breaks, it cannot be dropped again. If an egg breaks when dropped from the xth floor, you can assume it will also break when dropped from any floor greater than x.

Write an algorithm that finds the minimum number of trial drops it will take, in the worst case, to identify this floor.

For example, if N = 1 and k = 5, we will need to try dropping the egg at every floor, beginning with the first, until we reach the fifth floor, so our solution will be 5.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-198/script.js)

<h2>Problem 199</h2>
This problem was asked by Apple.

Implement the function fib(n), which returns the nth number in the Fibonacci sequence, using only O(1) space.

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-199/script.js)

<h2>Problem 200</h2>
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

![binary tree](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-200/pathsum1.jpg?raw=true);

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-181-200/problem-200/script.js)

<h2>Problem 201</h2>

Given an array of integers (which may include both positive and negative numbers), find the contiguous subarray which has the largest sum. Return that sum.
Example:

Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6.
Constraints:

    The array will have at least one element.
    The array size will not exceed 10,000 elements.
    Each element in the array will be an integer within the range [-1000, 1000].


[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-201-220/problem-201/script.js)

<h2>Problem 202</h2>
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

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-201-220/problem-202/script.js)

<h2>Problem 203</h2>

Task: "Two Sum"
Problem Statement:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
Example:

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Constraints:

    2 <= nums.length <= 10^4
    -10^9 <= nums[i] <= 10^9
    -10^9 <= target <= 10^9

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-201-220/problem-203/script.py)

<h2>Problem 204</h2>
Task: "Prime Factors"
Problem Statement:

Write a function that takes an integer n and returns a list of all its prime factors.
Example:

Input: n = 60
Output: [2, 2, 3, 5]
Explanation: The prime factors of 60 are 2, 2, 3, and 5 (since 60 = 2 * 2 * 3 * 5).
Constraints:

    2 <= n <= 10^6

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-201-220/problem-204/script.py)

<h2>Problem 205</h2>
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

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-201-220/problem-205/script.py)

<h2>Problem 206</h2>

Problem Statement:

Create a function is_palindrome that takes a string and returns True if the string is a palindrome and False otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
Example:

    Input: "Racecar"
    Output: True
    Input: "Hello"
    Output: False
    Input: "A man, a plan, a canal, Panama"
    Output: True

[Solution](https://github.com/vladbv/daily-coding-problem/blob/main/problems-201-220/problem-206/script.py)


