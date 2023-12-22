const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  first = null;

  getUnderlyingList() {
    return this.first;
  }

  getLast() {
    if(!this.first) return null;

    let last = this.first;

    while(last.next) {
      last = last.next;
    }

    return last;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    let last = this.getLast();

    if(!this.first) {
      this.first = newNode;
    } else {
      last.next = newNode;
    }
  }

  dequeue() {
    if(!this.first) return null;

    const toReturn = this.first
    this.first =  this.first.next;

    return toReturn.value;
  }
}

module.exports = {
  Queue
};
