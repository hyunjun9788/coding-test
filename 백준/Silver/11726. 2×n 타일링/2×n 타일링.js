(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split("\n");
    const n = Number(input[0]);

    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    if (n >= 2) dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
    }

    console.log(dp[n]);
})();
