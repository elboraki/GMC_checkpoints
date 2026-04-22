// =========================
// 1) ARRAY-BASED QUEUE
// =========================
class ArrayQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = new Array(capacity);
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }

  enqueue(element) {
    if (this.size === this.capacity) {
      throw new Error("Queue is full");
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.data[this.rear] = element;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const element = this.data[this.front];
    this.data[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return element;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.data[this.front];
  }
}

// =========================
// 2) LINKED LIST QUEUE
// =========================
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(element) {
    const node = new Node(element);

    if (this.isEmpty()) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    const value = this.front.value;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    return value;
  }

  isEmpty() {
    return this.front === null;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.value;
  }
}

// =========================
// 3) MIN-HEAP PRIORITY QUEUE
// =========================
class MinHeapPriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error("Priority queue is empty");
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  peekMin() {
    if (this.isEmpty()) {
      throw new Error("Priority queue is empty");
    }
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[index] < this.heap[parent]) {
        [this.heap[index], this.heap[parent]] =
          [this.heap[parent], this.heap[index]];
        index = parent;
      } else break;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] =
          [this.heap[smallest], this.heap[index]];
        index = smallest;
      } else break;
    }
  }
}

// =========================
// 4) ORDERED ARRAY PRIORITY QUEUE
// =========================
class OrderedArrayPriorityQueue {
  constructor() {
    this.data = [];
  }

  insert(element) {
    let i = 0;
    while (i < this.data.length && this.data[i] <= element) {
      i++;
    }
    this.data.splice(i, 0, element);
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error("Priority queue is empty");
    }
    return this.data.shift();
  }

  peekMin() {
    if (this.isEmpty()) {
      throw new Error("Priority queue is empty");
    }
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

// =========================
// TEST / DEMO
// =========================

console.log("=== Array Queue ===");
const aq = new ArrayQueue(3);
aq.enqueue(10);
aq.enqueue(20);
aq.enqueue(30);
console.log(aq.dequeue()); // 10
console.log(aq.peek());    // 20

console.log("\n=== Linked List Queue ===");
const llq = new LinkedListQueue();
llq.enqueue(100);
llq.enqueue(200);
llq.enqueue(300);
console.log(llq.dequeue()); // 100
console.log(llq.peek());    // 200

console.log("\n=== Min Heap Priority Queue ===");
const mhpq = new MinHeapPriorityQueue();
mhpq.insert(40);
mhpq.insert(10);
mhpq.insert(30);
mhpq.insert(5);
console.log(mhpq.extractMin()); // 5
console.log(mhpq.peekMin());    // 10

console.log("\n=== Ordered Array Priority Queue ===");
const oapq = new OrderedArrayPriorityQueue();
oapq.insert(40);
oapq.insert(10);
oapq.insert(30);
oapq.insert(5);
console.log(oapq.extractMin()); // 5
console.log(oapq.peekMin());    // 10