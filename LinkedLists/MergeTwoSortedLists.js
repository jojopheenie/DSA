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
    var head = new ListNode(0);
    var now = head;
    var p1 = l1;
    var p2 = l2;
    while (p1 || p2) {
      if (p1 === null || (p2 !== null && p2.val < p1.val)) {
        now.next = p2;
        p2 = p2.next;
      } else {
        now.next = p1;
        p1 = p1.next;
      }
      now = now.next;
    }
    return head.next;
  }

// let l1={val:1,next:{val:2,next:{val:4,next:null}}}
// let l2={val:1,next:{val:3,next:{val:4,next:null}}
// console.log(mergeTwoLists(l1, l2))

//Resource:
//https://leetcode.com/problems/merge-two-sorted-lists/
//- Easy
