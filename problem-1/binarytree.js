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
function serialize(root){
    let serializedString = '';  
    if(root === null) {
        return serializedString;
    }
    const queue = [];
    queue.push(root);

    while(queue.length !== 0){
        const node = queue.shift();
        if(node === null){
            serializedString += '* '; //It indicates null
        } else{
            serializedString += `${node.val} `;
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return serializedString;
} 

function deserialize(serializedString) {
    if (serializedString.length === 0){
    return null;
    }
    const values = serializedString.split(' ');

    values.pop();

    const root = new TreeNode(values[0]);
    const queue = [];
    queue.push(root);

    for(let i = 1; i < values.length; i+=1){
        const parentNode = queue.shift();
        if(values[i] !== '*') {
            const leftChild = new TreeNode(values[i]);
            parentNode.left = leftChild;
            queue.push(leftChild);
        }
        i++;
        if(values[i] !== '*') {
            const rightChild = new TreeNode(values[i]);
            parentNode.right = rightChild;
            queue.push(rightChild)
        }
    }
    return root;
}

module.exports = {serialize, deserialize};
exports.serialize = serialize;
exports.deserialize = deserialize;
