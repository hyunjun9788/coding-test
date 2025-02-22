(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }

  class Deque {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }

    pushFront(value) {
      const node = new Node(value);
      if (!this.front) {
        this.front = this.rear = node;
      } else {
        node.next = this.front;
        this.front.prev = node;
        this.front = node;
      }
      this.size++;
    }

    pushBack(value) {
      const node = new Node(value);
      if (!this.rear) {
        this.front = this.rear = node;
      } else {
        node.prev = this.rear;
        this.rear.next = node;
        this.rear = node;
      }
      this.size++;
    }

    popFront() {
      if (this.isEmpty()) return -1;
      const value = this.front.value;
      this.front = this.front.next;
      if (this.front) this.front.prev = null;
      else this.rear = null;
      this.size--;
      return value;
    }

    popBack() {
      if (this.isEmpty()) return -1;
      const value = this.rear.value;
      this.rear = this.rear.prev;
      if (this.rear) this.rear.next = null;
      else this.front = null;
      this.size--;
      return value;
    }

    getSize() {
      return this.size;
    }

    getFront() {
      return this.isEmpty() ? -1 : this.front.value;
    }

    getBack() {
      return this.isEmpty() ? -1 : this.rear.value;
    }

    isEmpty() {
      return this.size === 0;
    }
  }

  function processCommands(input) {
    const N = Number(input[0]);
    const deque = new Deque();
    const result = [];

    for (let i = 1; i <= N; i++) {
      const line = input[i].split(" ").map(Number);
      const command = line[0];
      const value = line[1];

      switch (command) {
        case 1:
          deque.pushFront(value);
          break;
        case 2:
          deque.pushBack(value);
          break;
        case 3:
          result.push(deque.popFront());
          break;
        case 4:
          result.push(deque.popBack());
          break;
        case 5:
          result.push(deque.getSize());
          break;
        case 6:
          result.push(deque.isEmpty() ? 1 : 0);
          break;
        case 7:
          result.push(deque.getFront());
          break;
        case 8:
          result.push(deque.getBack());
          break;
      }
    }

    console.log(result.join("\n"));
  }

  processCommands(input);
})();
