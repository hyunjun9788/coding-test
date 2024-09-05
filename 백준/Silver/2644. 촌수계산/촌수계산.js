(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let n = Number(input[0])
    let [targetX, targetY] = input[1].split(' ').map(Number)
    let k = Number(input[2])

    let graph = []
    let visited = new Array(n + 1).fill(0)
    let distance = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        graph[i] = []
    }
    for (let i = 3; i < 3 + k; i++) {
        let [x, y] = input[i].split(' ').map(Number)
        graph[x].push(y)
        graph[y].push(x)
    }

    const bfs = (start) => {
        let queue = [start]
        visited[start] = true

        while (queue.length) {
            let node = queue.shift()

            for (let nextNode of graph[node]) {
                if (!visited[nextNode]) {
                    visited[nextNode] = true
                    distance[nextNode] += distance[node] + 1
                    queue.push(nextNode)
                }
            }
        }
    }

    bfs(targetX)

    if (visited[targetY]) {
        console.log(distance[targetY])
    }
    else {
        console.log(-1)
    }
})();