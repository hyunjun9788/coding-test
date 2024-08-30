(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");
    const N = Number(input[0])
    input.shift()
    input = input.map((element) => {
        return element
            .trim()
            .split("")
            .map((element) => Number(element));
    });

    const visited = []
    for (let i = 0; i < N; i++) {
        visited.push(new Array(N).fill(0))
    }

    const moveRow = [0, 0, 1, -1]
    const moveCol = [1, -1, 0, 0]

    const rangeCheck = (row, col) => {
        if (row >= 0 && row < N && col >= 0 && col < N) {
            return true
        }
        return false
    }

    const dfs = (row, col) => {
        if (
            rangeCheck(row, col) === true &&
            input[row][col] === 1 &&
            visited[row][col] === 0
        ) {
            visited[row][col] = 1
            number++;
            for (let n = 0; n < moveRow.length; n++) {
                dfs(row + moveRow[n], col + moveCol[n])
            }
        }
    }

    const complex = []
    let number = 0

    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            if (Number(input[row][col]) === 1 && visited[row][col] === 0) {
                dfs(row, col)
                complex.push(number);
                number = 0
            }
        }
    }

    complex.sort((a, b) => a - b)
    const answer = [complex.length, ...complex]

    console.log(answer.join('\n'))
})();