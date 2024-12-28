(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const n = Number(input[0])

  const graph = []

  for (let i = 1; i < input.length; i++) {

    graph.push(input[i].split(' ').map(Number))
  }

  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, 1, -1]

  function dfs(y, x, height, visited) {

    visited[y][x] = true

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x
      const ny = dy[i] + y

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[ny][nx] && graph[ny][nx] > height) {
        dfs(ny, nx, height, visited)
      }
    }
  }

  function getSafeAreaCount(height) {
    const visited = Array.from({ length: n }, () => Array(n).fill(false))

    let count = 0

    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (!visited[y][x] && graph[y][x] > height) {
          dfs(y, x, height, visited)
          count++
        }
      }
    }
    return count
  }

  let maxHeight = 0
  for (let i = 0; i < n; i++) {
    maxHeight = Math.max(maxHeight, ...graph[i])
  }
  let maxSafeArea = 0
  for (let height = 0; height <= maxHeight; height++) {
    maxSafeArea = Math.max(maxSafeArea, getSafeAreaCount(height))
  }

  console.log(maxSafeArea)

})();