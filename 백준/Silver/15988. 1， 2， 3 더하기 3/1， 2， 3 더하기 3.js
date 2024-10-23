(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    const T = input.shift()

    const dp = Array.from({ length: T + 1 }, () => 0)
    dp[1] = 1
    dp[2] = 2
    dp[3] = 4

    const max = Math.max(...input)
    for (let j = 4; j <= max; j++) {
        dp[j] = (dp[j - 3] + dp[j - 2] + dp[j - 1]) % 1000000009
    }

    input.map((v) => console.log(dp[v]))
})();