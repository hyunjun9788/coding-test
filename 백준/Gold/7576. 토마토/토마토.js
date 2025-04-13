(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  class Queue {
    constructor() {
      this.front = 0;
      this.rear = 0;
      this.storage = {};
    }

    enqueue(item) {
      this.storage[this.rear] = item;
      this.rear++;
    }

    dequeue() {
      let removed = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;

      if (this.front === this.rear) {
        this.front = 0;
        this.rear = 0;
      }
      return removed;
    }

    size() {
      return this.rear - this.front;
    }
  }

  const [n, m] = input[0].split(" ").map(Number);
  const arr = [];
  const check = Array.from({ length: m }, () => Array(n).fill(false));

  for (let i = 1; i <= m; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function bfs() {
    const queue = new Queue();

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] === 1) {
          queue.enqueue([i, j]);
          check[i][j] = true;
        }
      }
    }

    while (queue.size() >= 0) {
      if (queue.size() === 0) {
        break;
      }
      const [x, y] = queue.dequeue();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
          if (arr[nx][ny] === -1 && arr[nx][ny] !== 0) continue;
          if (!check[nx][ny]) {
            arr[nx][ny] = arr[x][y] + 1;
            check[nx][ny] = true;
            queue.enqueue([nx, ny]);
          }
        }
      }
    }
  }

  bfs();
  let answer = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0) {
        answer = -1;
        break;
      }
      answer = Math.max(answer, arr[i][j]);
    }
    if (answer === -1) {
      break;
    }
  }

  if (answer !== -1) {
    console.log(answer - 1);
  } else {
    console.log(answer);
  }
})();
