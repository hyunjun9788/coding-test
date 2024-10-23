(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const N = input.shift()

    const dp = input.map(i => i.split(' ').map(i => Number(i)))

    for (let i = 1; i < N; i++) {
        dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2])
        dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2])
        dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1])

    }
    console.log(Math.min(...dp[N - 1]));

})();