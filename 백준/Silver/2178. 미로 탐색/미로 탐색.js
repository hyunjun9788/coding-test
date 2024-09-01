(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [n, m] = input[0].split(' ').map(Number)
    let graph = []
    for (let i = 1; i <= n; i++) {
        graph.push(input[i].split('').map(Number))
    }

    const bfs = (startX, startY) => {
        let queue = [[startX, startY]]
        const ds = [[-1, 0], [1, 0], [0, 1], [0, -1]]
        graph[startY][startX] = 1


        while (queue.length) {
            let [y, x] = queue.shift()

            for (let i = 0; i < 4; i++) {
                let nx = x + ds[i][0]
                let ny = y + ds[i][1]

                if (nx >= 0 && nx < m && ny >= 0 && ny < n && graph[ny][nx] === 1) {
                    graph[ny][nx] = graph[y][x] + 1
                    queue.push([ny, nx])
                }
            }
        }
        return graph[n - 1][m - 1]
    }


    console.log(bfs(0, 0))
})();

