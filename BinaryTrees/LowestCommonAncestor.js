/* 216 - Lowest Common Ancestor
Given the root node of a binary tree and two distinct values, find the lowest common ancestor.

Input: Root Node, Two Integer Values
Output: Integer Value of Lowest Common Ancestor
Example
Input: root, 4, 9 => Output: 7 LowestCommonAncestor

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
Integer values of nodes are all distinct.

Binary Tree Node has the following properties:
- value (Integer)
- right (Binary Tree Node, default null)
- left (Binary Tree Node, default null)

Solution
- Perform a tree traversal to find/collect the path to the first node.
- Place values of the path into an array (e.g., [5, 7, 4])
- Perform a tree traversal to find/collect the path to the second node.
- Place values of the path into second array (e.g., [5, 7, 8, 9])
- Iterate through both path arrays and compare the values.
- Return the last matching value. (e.g., return 7)

Notes
Facebook technical screen problem
*/

function LowestCommonAncestor (root, num1, num2) {
  let result = -1;
  let arr1 = [];
  let arr2 = [];
  let path = [];
  function ancestorPath (node) {
    if(node === null) {
      return;
    }
    path.push(node.value);
    if(node.value === num1) {
      arr1 = path.slice();
    }
    if(node.value === num2) {
      arr2 = path.slice();
    }
    ancestorPath(node.left);
    ancestorPath(node.right);
    path.pop();
  }
  ancestorPath(root);
  let i = 0;
  while(arr1[i] === arr2[i]) {
    result = arr1[i];
    i++;

  return result;
}

// Resources
// http://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/
// - Medium
