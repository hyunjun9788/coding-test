(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    const n = Number(input[0]);

    let result = []

    for (let i = 1; i <= n; i++) {
        let target = Number(input[i]) //4
        let dp = Array.from({ length: target + 1 }, () => 0)
        dp[1] = 1
        dp[2] = 2
        dp[3] = 4
        for (let i = 4; i <= target; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
        }

        result.push(dp[target])
    }

    console.log(result.join('\n'))

})();
