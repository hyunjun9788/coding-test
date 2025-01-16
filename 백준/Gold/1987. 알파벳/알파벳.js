(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [R, C] = input[0].split(" ").map(Number);

  const arr = [];
  const visited = Array.from({ length: 26 }, () => false);
  for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(""));
  }
  const first = arr[0][0].charCodeAt() - 65;
  visited[first] = true;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  let maxCount = 0;

  const dfs = (node, count) => {
    maxCount = Math.max(maxCount, count);
    const [y, x] = node;

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny < 0 || ny >= R || nx >= C || nx < 0) {
        continue;
      }
      const adj_node = arr[ny][nx].charCodeAt() - 65;
      if (!visited[adj_node]) {
        visited[adj_node] = true;
        dfs([ny, nx], count + 1);
        visited[adj_node] = false;
      }
    }
  };

  dfs([0, 0], 1);
  console.log(maxCount);
})();
