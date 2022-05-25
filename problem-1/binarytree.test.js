const {deserialize} = require('./binarytree');
const {serialize} = require('./binarytree');

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const node = new TreeNode(
  'root',
  new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
);
test('Testing if serialization and deserializatio is working properly', () => {
expect(deserialize(serialize(node)).left.left.val).toEqual('left.left'); // Jest Testing
});

