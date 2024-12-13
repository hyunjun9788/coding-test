(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const n = Number(input[0])
    const graph = Array.from({ length: n + 1 }, () => [])
    const visited = Array.from({ length: n + 1 }, () => false)
    const parentNode = Array.from({ length: n + 1 }, () => false)

    let result = ''
    for (let i = 1; i < n; i++) {
        const [start, end] = input[i].split(' ').map(Number)

        graph[start].push(end)
        graph[end].push(start)
    }

    const dfs = (node) => {
        if (visited[node]) {
            return
        }

        visited[node] = true

        const arr = graph[node]
        for (let j = 0; j < arr.length; j++) {
            if (!visited[graph[node][j]]) {
                parentNode[graph[node][j]] = node
                dfs(graph[node][j])
            }
        }
    }

    dfs(1)


    for (let i = 2; i < parentNode.length; i++) {
        result += parentNode[i] + '\n'
    }
    console.log(result)
})();