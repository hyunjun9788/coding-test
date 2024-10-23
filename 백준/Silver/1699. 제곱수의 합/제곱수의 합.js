(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const N = Number(input[0])

    const dp = []
    for (let i = 0; i <= N; i++) dp[i] = i;

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= Math.sqrt(i); j++) {
            dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1)
        }
    }
    console.log(dp[N])

})();
