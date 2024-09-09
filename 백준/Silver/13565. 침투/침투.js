(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [n, m] = input[0].split(' ').map(Number)

    let graph = new Array(n).fill([])
    let visited = Array.from({ length: n }, () => Array(m).fill(false))
    let queue = []

    for (let i = 0; i < n; i++) {
        graph[i] = input[i + 1].trim().split('').map(Number)
    }
    for (let i = 0; i < m; i++) {
        if (graph[0][i] === 0) {
            queue.push([0, i])
            visited[0][i] = true
        }
    }
    while (queue.length) {
        let [y, x] = queue.shift()

        let dx = [-1, 0, 1, 0]
        let dy = [0, 1, 0, -1]

        if (y === n - 1) {
            console.log("YES");
            return;
        }

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[ny][nx] && graph[ny][nx] === 0) {
                queue.push([ny, nx])
                visited[ny][nx] = true
            }
        }
    }

    console.log("NO");
})();