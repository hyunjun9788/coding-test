(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [n, m, k, x] = input[0].split(' ').map(Number)
    let graph = []

    for (let i = 1; i <= n; i++) {
        graph[i] = []
    }

    for (let i = 1; i <= m; i++) {
        let [x, y] = input[i].split(' ').map(Number)
        graph[x].push(y)
    }

    let distance = new Array(n + 1).fill(-1)
    distance[x] = 0

    queue = []
    queue.push(x)

    while (queue.length) {
        let now = queue.shift()

        for (let nextNode of graph[now])
            if (distance[nextNode] == -1) {
                distance[nextNode] = distance[now] + 1
                queue.push(nextNode)
            }
    }

    let check = false
    for (let i = 1; i <= n; i++) {
        if (distance[i] == k) {
            console.log(i)
            check = true
        }
    }
    if (!check) {
        console.log(-1)
    }
})();