/*213 - Longest Path of a Binary Tree
Given a binary tree node, return the number of nodes in the longest path between the root and a leaf node

Input: Node in a Binary Tree
Output: Integer
Example
Input: <BSTNode 1> =>   Output: 3 (from path 1--> 3--> 4)
LongestPathBinaryTree

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
Binary Tree Node has the following properties:

value (Integer)
left (Binary Tree Node, default null)
right (Binary Tree Node, default null)
Solution
Use pure recursion.

If the root is null, return 0 (we've reached the end of a path)
Otherwise:
a) Store the leftPath as the result of longestPath(root.left)
b) Store the rightPath as the result of longestPath(root.right)
Return the max of leftPath and rightPath plus 1 (we're adding the current node to the path)
Notes
Onsite whiteboarding question for Google (2016).
*/

// JavaScript Solution:

function longestPath(root) {
  if(root === null) return 0;
  let leftPath = longestPath(root.left);
  let rightPath = longestPath(root.right);
  return Math.max(leftPath, rightPath) + 1;
}

/*
Resources
Maximum Depth of Binary Tree on Leetcode
https://leetcode.com/problems/maximum-depth-of-binary-tree/
- Easy
*/
