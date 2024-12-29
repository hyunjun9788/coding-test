(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  class Queue {
    constructor() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
    }

    enqueue(element) {
      this.items[this.rear] = element;
      this.rear++;
    }

    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      const item = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return item;
    }

    isEmpty() {
      return this.front === this.rear;
    }

    size() {
      return this.rear - this.front;
    }
  }

  const [m, n] = input[0].split(' ').map(Number)

  const graph = []
  const visited = Array.from({ length: n }, () => Array(m).fill(false))
  let isAllRipe = true

  for (let i = 1; i < input.length; i++) {
    graph.push(input[i].split(' ').map(Number))
  }

  const dx = [-1, 0, 0, 1]
  const dy = [0, 1, -1, 0]

  const bfs = (ripen) => {
    const queue = new Queue()
    for (const ripe of ripen) {
      queue.enqueue(ripe);
    }

    while (!queue.isEmpty()) {
      const [y, x] = queue.dequeue()
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x
        const ny = dy[i] + y

        if (ny >= 0 && ny < n && nx >= 0 && nx < m && graph[ny][nx] === 0 && !visited[ny][nx]) {
          queue.enqueue([ny, nx])
          visited[ny][nx] = true
          graph[ny][nx] = graph[y][x] + 1
        }
      }
    }
  }

  const ripen = []
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (graph[y][x] === 1 && !visited[y][x]) {
        ripen.push([y, x])
        visited[y][x] = true
      }
      if (graph[y][x] !== 1) {
        isAllRipe = false
      }
    }
  }

  if (isAllRipe) {
    console.log(0)
    return
  }

  bfs(ripen)

  let minDay = 0
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].includes(0)) {
      console.log(-1)
      return
    }
    minDay = Math.max(...graph[i], minDay)
  }
  console.log(minDay - 1)
})();