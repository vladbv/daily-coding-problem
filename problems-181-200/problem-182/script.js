/* Problem 182
This problem was asked by Jane Street.

Generate a finite, but an arbitrarily large binary tree quickly in O(1).

That is, generate() should return a tree whose size is unbounded but finite.
*/

/* Generating a finite, arbitrary binary tree
 * @return {TreeNode}
 */
 
 function generate() {
	const root = new TreeNode(0);
  
  if(Math.random() < 0.5) root.left = generate();
  if(Math.random() < 0.5) root.right = generate();

	return root;
}

