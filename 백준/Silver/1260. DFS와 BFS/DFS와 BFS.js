(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const [N, M, V] = input[0].split(' ').map(Number)

    const graph = Array.from({ length: N + 1 }, () => [])
    const dfsVisited = Array(N + 1).fill(false)
    const bfsVisited = Array(N + 1).fill(false)

    const dfsResult = []
    const bfsResult = []


    for (let i = 1; i <= M; i++) {
        const [start, end] = input[i].split(' ').map(Number)
        graph[start].push(end)
        graph[end].push(start)
    }

    for (let i = 1; i <= N; i++) {
        graph[i].sort((a, b) => a - b);
    }

    const dfs = (node) => {
        if (dfsVisited[node]) {
            return
        }
        dfsVisited[node] = true
        dfsResult.push(node)

        for (let v of graph[node]) {
            dfs(v)
        }

    }

    const bfs = (node) => {
        const queue = []
        queue.push(node)
        bfsVisited[node] = true

        while (queue.length > 0) {
            const node = queue.shift()
            bfsResult.push(node)

            for (let v of graph[node]) {
                if (!bfsVisited[v]) {
                    queue.push(v)
                    bfsVisited[v] = true
                }
            }
        }
    }

    dfs(V)
    bfs(V)

    console.log(dfsResult.join(' '))
    console.log(bfsResult.join(' '))
})();