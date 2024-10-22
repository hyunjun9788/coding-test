(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const N = Number(input[0])
    const arr = input[1].trim().split(' ').map(Number)

    const dp = Array(N).fill(1)

    for (let i = 1; i < N; i++) {
        const values = [1]
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                values.push(dp[j] + 1)
            }
        }
        dp[i] = Math.max(...values)
    }
    console.log(Math.max(...dp))
})();
