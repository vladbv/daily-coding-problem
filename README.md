I love the DailyCodingProblems and this is part of my daily routine, to improve my skills.

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


<h2>Problem 2</h2>

This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
