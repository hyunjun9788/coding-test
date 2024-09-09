(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [n, m] = input[0].split(' ').map(Number);
    let graph = [];
    let queue = [];

    for (let i = 1; i <= n; i++) {
        graph.push(input[i].split(' ').map(Number));
    }

    let visited = Array.from({ length: n }, () => Array(m).fill(false));
    let distance = Array.from({ length: n }, () => Array(m).fill(0));

    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] === 1) {
                queue.push([i, j]);
                visited[i][j] = true;
            }
        }
    }

    while (queue.length) {
        let [y, x] = queue.shift();

        for (let i = 0; i < 8; i++) {
            let ny = y + dy[i];
            let nx = x + dx[i];

            if (ny >= 0 && ny < n && nx >= 0 && nx < m && !visited[ny][nx]) {
                visited[ny][nx] = true;
                distance[ny][nx] = distance[y][x] + 1;
                queue.push([ny, nx]);
            }
        }
    }

    let maxDistance = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            maxDistance = Math.max(maxDistance, distance[i][j]);
        }
    }

    console.log(maxDistance);
})();
