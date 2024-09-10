(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [n, m] = input[0].split(' ').map(Number)

    let graph = []
    let visited = Array.from({ length: m }, () => Array(n).fill(false))
    for (let i = 1; i <= m; i++) {
        graph.push(input[i].split(' ').map(Number))
    }
    let dx = [1, 0]
    let dy = [0, 1]
    const dfs = (y, x) => {
        if (y === m - 1 && x === n - 1) {
            return true
        }
        for (let i = 0; i < 2; i++) {
            let ny = y + dy[i]
            let nx = x + dx[i]

            if (ny >= 0 && ny < m && nx >= 0 && nx < n && !visited[ny][nx] && graph[ny][nx] == 1) {
                visited[ny][nx] = true
                if (dfs(ny, nx)) {
                    return true;
                }
            }
        }
    }
    visited[0][0] = true
    let result = dfs(0, 0)
    if (result) {
        console.log('Yes')
    } else {
        console.log('No')

    }
})();