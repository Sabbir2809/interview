// Queue Implementation: FIFO -> First In First Out

class Queue {
  // constructor()
  constructor() {
    this.arr = [];
  }

  // insert method
  insert(value) {
    this.arr.unshift(value);
    return this.arr;
  }

  // remove method
  remove() {
    this.arr.pop();
    return this.arr;
  }

  // First Index Peek
  peek() {
    return this.arr[this.arr.length - 1];
  }
}

// object create
const queue = new Queue();
console.log(queue.insert(10));
console.log(queue.insert(20));
console.log(queue.insert(30));
console.log(queue.insert(40));
console.log(queue.insert(50));
// first index value see then remove
console.log(queue.peek());
console.log(queue.remove());
// first index value see then remove
console.log(queue.peek());
console.log(queue.remove());
