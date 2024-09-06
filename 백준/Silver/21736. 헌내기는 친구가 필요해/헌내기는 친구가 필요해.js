(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [n, m] = input[0].split(' ').map(Number)
    let graph = Array.from({ length: n }, () => [])
    let visited = Array.from({ length: n }, () => Array(m).fill(false))
    let count = 0
    for (let i = 0; i < n; i++) {
        graph[i] = (input[i + 1].split(''))
    }

    const first = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] === "I") {
                first.push(i, j)
            }
        }
    }
    let queue = [first]
    visited[first[0]][first[1]] = true


    while (queue.length) {
        let [y, x] = queue.shift()


        let dx = [-1, 0, 1, 0]
        let dy = [0, 1, 0, -1]

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[ny][nx]) {
                if (graph[ny][nx] == 'O') {
                    visited[ny][nx] = true
                    queue.push([ny, nx])
                }
                if (graph[ny][nx] == 'P') {
                    visited[ny][nx] = true
                    count++
                    queue.push([ny, nx])
                }
            }
        }
    }
    if (count) {
        console.log(count)
    } else {
        console.log('TT')
    }

})();

