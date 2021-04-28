/** Binary Search Tree
 *
 *  TreeNode class
 *
 *  Prompt:    Create a TreeNode class
 *             The TreeNode class should contain the following properties:
 *
 *                   value:   integer value (default null)
 *                    left:   pointer to another node (initially null)
 *                   right:   pointer to another node (initially null)
 *
 *                 Example:   let sample = new TreeNode(1)
 *                            sample.value   // 1
 *                            sample.left    // null
 *                            sample.right   // null
 *
 *
 *  BinarySearchTree class.
 *
 *  Prompt:    Create a BinarySearchTree class
 *
 *             The BinarySearchTree class should contain the following
 *             properties:
 *
 *                    root:   A pointer to the root node (initially null)
 *                    size:   The number of nodes in the BinarySearchTree
 *
 *             The BinarySearchTree class should also contain the following
 *             methods:
 *
 *                  insert:   A method that takes takes an integer value, and
 *                            creates a node with the given input.  The method
 *                            will then find the correct place to add the new
 *                            node. Values larger than the current node node go
 *                            to the right, and smaller values go to the left.
 *
 *                            Input:     value
 *                            Output:    undefined
 *
 *                  search:   A method that will search to see if a node with a
 *                            specified value exists and returns true or false
 *                            if found.
 *
 *                            Input:     value
 *                            Output:    boolean
 *
 *
 *             What are the time and auxilliary space complexities of the
 *             various methods?
 *
 */

 'use strict';


 class TreeNode {
   constructor(value) {
     this.value = value === undefined? null : value;
     this.left = null;
     this.right = null;
   }
 }

 class BinarySearchTree {
   constructor() {
     this.root = null;
     this.size = 0;
   }

   // Time Complexity: O(N) - assuming an imbalanced tree
   // Auxiliary Space Complexity: O(1)
   insert(value) {
     let newNode = new TreeNode(value);
     if (this.root === null) {
       this.root = newNode;
       this.size++;
       return;
     }

     let parent = null;
     let child = this.root;
     while (child !== null) {
       parent = child;
       child = parent.value > value ? parent.left : parent.right;
     }
     if (parent.value > value) {
       parent.left = newNode;
     } else {
       parent.right = newNode;
     }
     this.size++;
   }


   // Time Complexity: O(N) - assuming an imbalanced tree
   // Auxiliary Space Complexity: O(1)
   search(value) {
     let current = this.root;
     while (current !== null) {
       if (current.value === value) {
         return true;
       }
       current = current.value > value ? current.left : current.right;
     }
     return false;
   }
 }
