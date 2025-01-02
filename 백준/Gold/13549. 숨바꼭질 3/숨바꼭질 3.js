(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  class MinHeap {
    constructor() {
      this.items = [];
    }

    size() {
      return this.items.length;
    }

    push(item) {
      this.items.push(item);
      this.bubbleUp();
    }

    pop() {
      if (this.size() === 0) return null;
      const min = this.items[0];
      this.items[0] = this.items[this.size() - 1];
      this.items.pop();
      this.bubbleDown();
      return min;
    }

    bubbleUp() {
      let index = this.size() - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.items[parentIndex][0] <= this.items[index][0]) break;
        [this.items[parentIndex], this.items[index]] = [this.items[index], this.items[parentIndex]];
        index = parentIndex;
      }
    }

    bubbleDown() {
      let index = 0;
      while (index * 2 + 1 < this.size()) {
        let leftChild = index * 2 + 1;
        let rightChild = index * 2 + 2;
        let smallerChild = rightChild < this.size() && this.items[rightChild][0] < this.items[leftChild][0]
          ? rightChild
          : leftChild;

        if (this.items[index][0] <= this.items[smallerChild][0]) break;
        [this.items[index], this.items[smallerChild]] = [this.items[smallerChild], this.items[index]];
        index = smallerChild;
      }
    }
  }

  const INF = 1e12;
  const MAX = 100000;

  const [N, K] = input[0].split(" ").map(Number);

  const time = Array(MAX + 1).fill(INF);
  const pq = new MinHeap();

  time[N] = 0;
  pq.push([0, N]);

  while (pq.size() > 0) {
    const [curTime, curPos] = pq.pop();

    const nexts = [
      [curTime, 2 * curPos],
      [curTime + 1, curPos + 1],
      [curTime + 1, curPos - 1]
    ];

    for (const [nextTime, nextPos] of nexts) {
      if (nextPos >= 0 && nextPos <= MAX) {
        if (nextTime < time[nextPos]) {
          time[nextPos] = nextTime;
          pq.push([nextTime, nextPos]);
        }
      }
    }
  }

  console.log(time[K]);
})();
