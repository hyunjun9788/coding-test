(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let [N, M, R] = input[0].split(' ').map(Number)
    let graph = Array.from({ length: N + 1 }, () => [])
    let depth = Array.from({ length: N + 1 }, () => -1)
    let visited = Array.from({ length: N + 1 }, () => false)
    for (let i = 1; i <= M; i++) {
        let [x, y] = input[i].split(' ').map(Number)
        graph[x].push(y)
        graph[y].push(x)

    }
    for (let i = 1; i <= N; i++) {
        graph[i].sort((a, b) => a - b)
    }

    const dfs = (r, d) => {
        visited[r] = true
        depth[r] = d
        for (let next of graph[r]) {
            if (!visited[next]) {
                dfs(next, d + 1)
            }
        }
    }

    dfs(R, 0)
    for (let i = 1; i <= N; i++) {
        console.log(depth[i]);
    }
})();