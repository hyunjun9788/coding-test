(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");
    let answer = []
    const [ylen, xlen, k] = input[0].split(' ').map(Number);
    let graph = Array.from(Array(ylen), () => Array(xlen).fill(0))

    for (let i = 0; i < k; i++) {
        let [x1, y1, x2, y2] = input[i+1].split(' ').map(Number)

        for (let y = ylen - y2; y < ylen - y1; y++) {
            for (let x = x1; x < x2; x++) {
                graph[y][x] = 1
            }
        }
    }

    const bfs = (start) => {
        const ds = [[-1, 0], [1, 0], [0, 1], [0, -1]]
        let queue = [start]
        let cnt = 0

        while (queue.length) {
            const [cy, cx] = queue.shift()
            cnt++

            for (let i = 0; i < 4; i++) {
                const nx = cx + ds[i][0]
                const ny = cy + ds[i][1]

                if (ny >= 0 && ny < ylen && nx >= 0 && nx < xlen && !graph[ny][nx]) {
                    graph[ny][nx] = 1
                    queue.push([ny, nx])
                }
            }
        }
        return cnt
    }

    for (let i = 0; i < ylen; i++) {
        for (let j = 0; j < xlen; j++) {
            if (!graph[i][j]) {
                graph[i][j] = 1
                answer.push(bfs([i, j]))
            }
        }
    }
    console.log(answer.length);
    console.log(answer.sort((a, b) => a - b).join(' '));
})();

