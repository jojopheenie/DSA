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
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) { //2 //3
  // recursive
  if (!root) return null;
  // let left = root.left
  let temp = root.left; //1 //null
  // calling invertTree on root.right and store that as root.left
  root.left = invertTree(root.right) //3 //null
  // calling invertTree on temp and store that as root.right
  root.right = invertTree(temp) //1
  // we want the first left child to be the FULL inverse of the right side
  return root; //2, 3, 1
};

// if (!root) return null;
// invertTree(root.left);
// invertTree(root.right);
// temp = root.left;
// root.left = root.right;
// root.right = temp;
// return root;

//left = 2
//right = 7
//          4
//     2        7
//  1    3    6   9

// 7   =>    7
//6 9       9 6

// call stack number = ?
// root = ?

var iterativeInvertTree = function (root) {
  // iterative;
  var queue = [];
  queue.unshift(root);
  while (queue[0]) {
    current = queue.pop();
    temp = current.left;
    current.left = current.right;
    current.right = temp;
    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);
  }
  return root;
};

let root = new TreeNode(4);
//create the left side
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);

// Resources
// https://leetcode.com/problems/invert-binary-tree/
// - Easy
