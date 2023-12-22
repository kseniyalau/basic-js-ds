const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  arr = [];

  push(element) {
    this.arr.push(element);
  }

  pop() {
    const length = this.arr.length;

    if(length > 0) {
      const lastElem = this.arr[length - 1];
      this.arr = this.arr.slice(0, length - 1);
      return lastElem;
    }
  }

  peek() {
    const length = this.arr.length;

    if(length > 0) {
      const lastElem = this.arr[length - 1];
      return lastElem;
    }
  }
}

module.exports = {
  Stack
};
