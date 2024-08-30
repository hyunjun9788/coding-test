function dfs(x, visited) {
    if (visited[x]) return
    visited[x] = true

    for (let y of graph[x]) {
        dfs(y, visited)
    }
}


(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");



    let [n, m] = input[0].split(' ').map(Number)

    graph = []

    for (let i = 1; i <= n; i++) {
        graph[i] = []


    }
    for (let i = 1; i <= m; i++) {
        let [x, y] = input[i].split(' ').map(Number)
        graph[x].push(y)
        graph[y].push(x)
    }

    cnt = 0
    visited = new Array(n + 1).fill(false)
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            dfs(i, visited)
            cnt++
        }
    }
    console.log(cnt)
})();