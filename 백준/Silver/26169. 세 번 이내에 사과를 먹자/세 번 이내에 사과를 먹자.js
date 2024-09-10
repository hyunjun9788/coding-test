
(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [y, x] = input[5].split(' ').map(Number)
    let visited = Array.from({ length: 5 }, () => Array(5).fill(false))

    let graph = []
    for (let i = 0; i < 5; i++) {
        graph.push(input[i].split(' ').map(Number))
    }

    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]

    let maxApples = 0;
    const dfs = (y, x, walk, cnt) => {
        if (walk > 3) return
        if (cnt >= 2) {
            maxApples = Math.max(maxApples, cnt)
            return
        }
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]


            if (ny >= 0 && ny < 5 && nx >= 0 && nx < 5 && !visited[ny][nx] && graph[ny][nx] !== -1) {
                visited[ny][nx] = true
                let originalValue = graph[ny][nx]
                graph[ny][nx] = -1
                dfs(ny, nx, walk + 1, cnt + (originalValue === 1 ? 1 : 0))

                visited[ny][nx] = false;
                graph[ny][nx] = originalValue;
            }

        }

    }
    visited[y][x] = true
    dfs(y, x, 0, 0)
    console.log(maxApples >= 2 ? 1 : 0)
})();