/*21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.

Code
*/

function mergeTwoLists(l1, l2) {
  //Create a place holder head
    var head = new ListNode(0);
    var now = head;
    //capture head of l1
    var p1 = l1;
    //capture head of l2
    var p2 = l2;
    //while eith head does not = null
    while (p1 || p2) {
      //if head1 is null or head 2 does not = null and head2 is less than head1
      if (p1 === null || (p2 !== null && p2.val < p1.val)) {
        //move head 2 to 2nd place
        now.next = p2;
        //reassign head2 to the following node
        p2 = p2.next;
      } else {
        // if head1 is less than head2 move head1 to 2nd place
        now.next = p1;
        //reassign head1 to the following node
        p1 = p1.next;
      }
      //reassign the place holder head to the following node so we can keep sorting
      now = now.next;
    }
    //after nodes are in correct spots, get rid of place holder head and return sorted linked list
    return head.next;
  }

// let l1={val:1,next:{val:2,next:{val:4,next:null}}}
// let l2={val:1,next:{val:3,next:{val:4,next:null}}}
// console.log(mergeTwoLists(l1, l2))

//Resource:
//https://leetcode.com/problems/merge-two-sorted-lists/
//- Easy
