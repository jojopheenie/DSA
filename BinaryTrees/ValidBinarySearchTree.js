/*215 - Valid Binary Search Tree
Given a binary tree root node, check if the tree is a valid binary search tree.

Input: Node in a Binary Tree
Output: Boolean
Example
Input: ValidBinarySearchTree

Output: False

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
Binary Tree Node has the following properties:

value (Integer)
right (Binary Tree Node, default null)
left (Binary Tree Node, default null)

Solution
Use Helper Method Recursion
Store an array in the outer function's scope.
Perform an in-order depth first traversal, pushing each node's values into the array.
Check to see if the array is sorted in ascending order.
*/

function isBST(root) {
  let result = []

  function dfsInOrder(node) {
    if(node === null) return;
    dfsInOrder(node.left);
    result.push(node.val);
    dfsInOrder(node.right);
  }

  dfsInOrder(root)

  for(let i = 1; i < result.length; i++) {
    if(result[i] < result[i - 1]) {
      return false;
    }
  }
  return true;
}

// Resources
// https://leetcode.com/problems/validate-binary-search-tree/
// - Medium
