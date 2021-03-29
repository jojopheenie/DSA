/*209 - Stack with a Queue
Implement a Stack class using only a single Queue instance. The Stack should have the following methods:

push: add an item to the top of the stack
pop: remove an item from the top of the stack

Input:     N/A
Output:    Stack Class

Example
push(1)
push(2)
push(3)
pop() //=> 3

Constraints
push: Time Complexity: O(1), Auxiliary Space Complexity: O(1)
pop: Time Complexity: O(N), Auxiliary Space Complexity: O(1)

Assume the Stack will only take integer values
May use only one instance of the Queue class
Queue class has the following methods:
enqueue: add an item to the end of the Queue

dequeue: remove an item from the front of the Queue

Notes
Helpful to diagram out the Stack you're building a separate diagram for the Queue under the hood.

Think about what should happen in both diagrams after perform a push or pop

What do you expect your Stack to return?

Code */
const Queue = require('Queue');

class Stack {
  constructor() {
    this.storage = new Queue();
    this.size = 0;
  }

  push(item) {
    this.storage.enqueue(item);
    this.size++;
  }

  pop() {
    let i = 0;
    while (i < this.size - 1) {
      let transfer = this.storage.dequeue();
      this.storage.enqueue(transfer);
      i++;
    }
    this.size--;
    return this.storage.dequeue();
  }
}

// Resources
// Stack Using a Single Queue on Geeks for Geeks
// https://www.geeksforgeeks.org/implement-a-stack-using-single-queue/
// - Easy
