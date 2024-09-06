(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let [N, M, R] = input[0].split(' ').map(Number)

    let graph = Array.from({ length: N + 1 }, () => []);
    let visited = Array.from({ length: N + 1 }, () => 0);
    let order = Array.from({ length: N + 1 }, () => 0);
    let visitCount = 1
    for (let i = 0; i < M; i++) {
        let [x, y] = input[i + 1].split(' ').map(Number)
        graph[x].push(y)
        graph[y].push(x)
    }

    graph.forEach((arr) => arr.sort((a, b) => a - b))

    const bfs = (start) => {
        let queue = [start]
        visited[start] = true
        order[start] = visitCount++

        while (queue.length) {
            let node = queue.shift()

            for (let neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    order[neighbor] = visitCount++
                    queue.push(neighbor)

                }
            }
        }
    }

    bfs(R)

    for (let i = 1; i <= N; i++) {
        console.log(order[i])
    }

})();

