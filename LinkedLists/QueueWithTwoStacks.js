/* 210 - Queue with Two Stacks
Implement a Queue class using two stacks. The Queue should have the following methods:

enqueue: add an item to the end of the collection

dequeue: remove an item from the beginning of the collection

Input: 		N/A
Output: 	Queue Class
Example
enqueue(1)
enqueue(2)
enqueue(3)
dequeue() // => 1

Constraints
enqueue:   Time Complexity: O(1),	Auxiliary Space Complexity: O(1)
dequeue:   Time Complexity: O(N),	Auxiliary Space Complexity: O(1)

May not use other data structures other than the two Stack instances that are given
Assume the Queue will only take integer values

Stack class has the following methods:
- push: add an item to the end of the collection
- pop: remove an from the end of the collection
- size: return the number of items in the stack

Solution
- Create two stacks named inbox and outbox
- For the enqueue method, push the value into the inbox
- For the dequeue method, check the to see if the outbox contains items
- If the outbox contains items, pop from the outbox and return its value
- Otherwise for each item in the inbox, pop it out and push it into the outbox, then perform Step 4.

Code
Assume that we have a Stack class imported
*/

const Stack = require('Stack');

class Queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(item) {
    this.inbox.push(item);
  }

  dequeue() {
    if (this.outbox.size() > 0) {
      return this.outbox.pop();
    }

    while (this.inbox.size() > 0) {
      let transfer = this.inbox.pop();
      this.outbox.push(transfer);
    }
    return this.outbox.pop();
  }
}

/* Notes
Extremely helpful to diagram out the two stacks from the beginning.

Helpful to diagram out the Queue you're building a separate diagram for the two Stacks under the hood.

Think about what should happen in both diagrams after perform a enqueue or dequeue

What do you expect your Queue to return?

Resources
Queue Using Two Stack on Geeks for Geeks
- Medium
*/
