(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let n = Number(input[0])

    let graph = []

    for (let i = 1; i <= n; i++) {
        graph[i - 1] = input[i].split(' ').map(Number)
    }


    queue = []
    queue.push([0, 0])
    let visited = Array.from({ length: n }, () => Array(n).fill(0));
    visited[0][0] = 1

    while (queue.length) {
        let [y, x] = queue.shift()
        let number = graph[y][x]

        let dx = [number, 0]
        let dy = [0, number]

        for (let i = 0; i < 2; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && visited[ny][nx] == 0) {
                visited[ny][nx] = 1;
                queue.push([ny, nx])

                if (nx == n - 1 && ny == n - 1) {
                    console.log('HaruHaru')
                    return
                }
            }
        }

    }
    console.log('Hing')


})();