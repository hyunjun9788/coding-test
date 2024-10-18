(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const N = +input[0]
    const cards = input[1].split(' ').map(Number)
    const dp = [0, ...cards]

    for (let i = 2; i < dp.length; i++) {

        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], (dp[j] + dp[i - j]))
        }
    }
    console.log(dp[N])
})();
