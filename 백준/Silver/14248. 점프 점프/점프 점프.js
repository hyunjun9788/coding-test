(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let N = Number(input[0])

    let arr = input[1].split(' ').map(Number)
    let visited = Array(N).fill(false)
    let start = Number(input[2]) - 1
    let count = 0


    const dfs = (current) => {

        visited[current] = true
        count++

        let nextPositions = [current + arr[current], current - arr[current]]
        for (let nx of nextPositions) {
            if (nx >= 0 && nx < N && !visited[nx]) {
                dfs(nx)
            }
        }
    }
    dfs(start)

    console.log(count)
})();