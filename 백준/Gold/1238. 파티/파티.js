(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  class PriorityQueue {
    constructor() {
      this.items = [];
    }

    push(item) {
      this.items.push(item);
      this.bubbleUp();
    }

    pop() {
      if (this.size() === 0) {
        return null;
      }
      const min = this.items[0];
      this.items[0] = this.items[this.items.length - 1];
      this.items.pop();
      this.bubbleDown();

      return min;
    }

    swap(a, b) {
      [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }

    bubbleUp() {
      let index = this.size() - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.items[parentIndex][0] < this.items[index][0]) {
          break;
        }

        this.swap(index, parentIndex);
        index = parentIndex;
      }
    }

    bubbleDown() {
      let index = 0;

      while (index * 2 + 1 < this.size()) {
        let leftChild = index * 2 + 1;
        let rightChild = index * 2 + 2;
        let smallerChild =
          rightChild < this.size() &&
          this.items[rightChild][0] < this.items[leftChild][0]
            ? rightChild
            : leftChild;

        if (this.items[index][0] <= this.items[smallerChild][0]) {
          break;
        }
        this.swap(index, smallerChild);
        index = smallerChild;
      }
    }
    size() {
      return this.items.length;
    }
  }

  const [N, M, X] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i < input.length; i++) {
    const [start, end, time] = input[i].split(" ").map(Number);

    graph[start].push([end, time]);
  }

  function dijkstra(start) {
    const dist = Array.from({ length: N + 1 }, () => Infinity);
    const pq = new PriorityQueue();
    pq.push([start, 0]);
    dist[start] = 0;

    while (pq.size()) {
      const [cur_node, cur_time] = pq.pop();

      for (let [adj_node, adj_time] of graph[cur_node]) {
        const totalTime = cur_time + adj_time;
        if (dist[adj_node] > totalTime) {
          pq.push([adj_node, totalTime]);
          dist[adj_node] = totalTime;
        }
      }
    }

    return dist;
  }

  const dist = Array.from({ length: N + 1 }, () => null);
  for (let i = 1; i <= N; i++) {
    dist[i] = dijkstra(i);
  }

  let ans = -1;
  for (let i = 1; i <= N; i++) {
    ans = Math.max(ans, dist[i][X] + dist[X][i]);
  }

  console.log(ans);
})();
