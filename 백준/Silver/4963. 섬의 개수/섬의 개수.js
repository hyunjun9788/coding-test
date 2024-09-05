(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let line = 0

    while (true) {
        let graph = []
        let [w, h] = input[line].split(' ').map(Number)
        if (w === 0 && h === 0) break;
        for (let i = line + 1; i <= line + h; i++) {
            graph.push(input[i].split(' ').map(Number))
        }

        let visited = Array.from({ length: h }, () => Array(w).fill(0));

        let dx = [-1, 0, 1, 0, -1, -1, 1, 1]
        let dy = [0, 1, 0, -1, -1, 1, 1, -1]

        const bfs = (startY, startX) => {
            let queue = [[startY, startX]]
            visited[startY][startX] = true

            while (queue.length) {

                let [y, x] = queue.shift()

                for (let i = 0; i < 8; i++) {
                    let nx = x + dx[i]
                    let ny = y + dy[i]


                    if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[ny][nx] && graph[ny][nx] === 1) {
                        visited[ny][nx] = 1
                        queue.push([ny, nx])
                    }
                }
            }
        }

        let islandCount = 0

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                if (!visited[y][x] && graph[y][x] === 1) {
                    bfs(y, x)
                    islandCount++
                }
            }
        }

        console.log(islandCount)
        line += h + 1
    }

})();