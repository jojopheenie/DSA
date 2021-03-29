/*214 - Invert a Binary Tree
Given a binary tree root node, invert the binary tree (mirror) and return back the root node.

Input: Node in a Binary Tree
Output: Node in a Binary Tree
Example
Input: InvertBinaryTree1
See Pictures:  https://leetcode.com/problems/invert-binary-tree/
Output: InvertbinaryTree2

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
Binary Tree Node has the following properties:

value (Integer)
left (Binary Tree Node, default null)
right (Binary Tree Node, default null)
Must swap the entire node instances, not just their values

Solution
Use Pure Recursion to solve this problem. Our only input is node.

For the base case, if input node is null, return null, otherwise, swap the left and right child.

Use a temp variable if necessary.

Call the function recursively on both the node.left and node.right.

Return the input node.

Notes
The creator of homebrew couldn't solve this problem in a Google Interview: https://twitter.com/mxcl/status/608682016205344768

Solution
*/
var invertTree = function(root) {
  if (!root)
      return null;

  // recursive
  invertTree(root.left);
  invertTree(root.right);
  temp = root.left;
  root.left = root.right;
  root.right = temp;

  // iterative
  // var queue = [];
  // queue.unshift(root);
  // while(queue[0]){
  //     current = queue.pop();
  //     temp = current.left;
  //     current.left  = current.right;
  //     current.right = temp;
  //     if(current.left) queue.unshift(current.left);
  //     if(current.right) queue.unshift(current.right);
  // }

  return root;
};

// Resources
// https://leetcode.com/problems/invert-binary-tree/
// - Easy
