(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");
    let [n, m, r] = input[0].split(' ').map(Number)

    let graph = []
    let visited = Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        graph[i] = []

    }

    for (let i = 1; i <= m; i++) {
        let [x, y] = input[i].split(' ').map(Number)
        graph[x].push(y)
        graph[y].push(x)
    }
    for (let i = 1; i <= graph.length - 1; i++) {
        graph[i].sort((a, b) => a - b)
    }

    let count = 1
    let dfs = (node) => {

        visited[node] = count
        count++

        for (let neighbor of graph[node]) {
            if (visited[neighbor] === 0) {
                dfs(neighbor)
            }
        }
    }

    dfs(r)

    for (let i = 1; i <= n; i++) {
        console.log(visited[i]);
    }



})();
