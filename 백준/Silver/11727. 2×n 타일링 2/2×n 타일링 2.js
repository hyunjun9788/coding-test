(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim();
    const n = Number(input);


    const dp = Array.from({ length: n + 1 }, () => 0);


    dp[1] = 1;
    if (n >= 2) dp[2] = 3;

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
    }

    console.log(dp[n]);
})();
