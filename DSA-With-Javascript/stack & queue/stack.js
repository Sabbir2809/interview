// stack implementation: LIFO -> Last In First Out

class Stack {
  // constructor
  constructor() {
    this.arr = [];
  }

  // insert method
  insert(value) {
    this.arr.push(value);
    return this.arr;
  }
  // remove method
  remove() {
    this.arr.pop();
    return this.arr;
  }
  // peek array last index value
  peek() {
    return this.arr[this.arr.length - 1];
  }
}

// object create
const stack = new Stack();

console.log(stack.insert(3));
console.log(stack.insert(5));
console.log(stack.insert(7));
console.log(stack.insert(9));
// last index value see then remove
console.log(stack.peek());
console.log(stack.remove());
// last index value see then remove
console.log(stack.peek());
console.log(stack.remove());
