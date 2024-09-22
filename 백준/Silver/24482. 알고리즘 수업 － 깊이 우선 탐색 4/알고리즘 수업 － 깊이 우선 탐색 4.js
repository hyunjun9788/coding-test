(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let [n, m, r] = input[0].split(' ').map(Number)
    let graph = Array.from({ length: n + 1 }, () => [])
    let visited = Array.from({ length: n + 1 }, () => false)
    let depth = Array.from({ length: n }, () => -1)

    for (let i = 1; i <= m; i++) {
        let [x, y] = input[i].split(' ').map(Number)

        graph[x].push(y)
        graph[y].push(x)
    }

    for (let i = 1; i <= n; i++) {
        graph[i].sort((a, b) => b - a)
    }


    const dfs = (start) => {
        visited[start] = true
        for (let nextNode of graph[start]) {
            if (!visited[nextNode]) {
                depth[nextNode - 1] = depth[start - 1] + 1
                dfs(nextNode)
            }
        }

    }
    depth[r - 1] = 0
    dfs(r)


    console.log(depth.join('\n'))
})();