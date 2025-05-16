(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i <= m; i++) {
    const [x, y] = input[i].split(" ").map(Number);

    graph[x].push(y);
    graph[y].push(x);
  }

  const bfs = (start) => {
    const queue = [start];
    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(0);

    visited[start] = true;

    while (queue.length > 0) {
      const cur = queue.shift();

      for (const next of graph[cur]) {
        if (!visited[next]) {
          visited[next] = true;
          distance[next] = distance[cur] + 1;
          queue.push(next);
        }
      }
    }

    return distance.reduce((a, b) => a + b, 0);
  };

  let answer = 0;
  let minSum = Infinity;

  for (let i = 1; i <= n; i++) {
    const sum = bfs(i);

    if (sum < minSum) {
      minSum = sum;
      answer = i;
    }
  }

  console.log(answer);
})();
