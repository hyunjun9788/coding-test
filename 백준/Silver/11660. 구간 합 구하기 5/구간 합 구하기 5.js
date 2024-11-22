(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    const [n, m] = input[0].split(' ').map(Number)

    let graph = []
    for (let i = 0; i < n; i++) {
        graph[i] = input[i + 1].split(' ').map(Number)
    }

    let answer = []

    let prefix = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0))


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            prefix[i + 1][j + 1] = prefix[i + 1][j] + prefix[i][j + 1] + graph[i][j] - prefix[i][j]
        }
    }


    for (let i = n + 1; i <= n + m; i++) {
        const [x1, y1, x2, y2] = input[i].split(' ').map(Number)

        let result = prefix[x2][y2] - prefix[x2][y1 - 1] - prefix[x1 - 1][y2] + prefix[x1 - 1][y1 - 1]
        answer.push(result)
    }

    console.log(answer.join('\n'))
}


)();
