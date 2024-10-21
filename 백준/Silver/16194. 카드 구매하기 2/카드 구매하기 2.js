(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const number = Number(input[0])
    const cards = input[1].split(' ').map(Number)

    const dp = [0, ...cards]

    for (let i = 2; i <= cards.length; i++) { //1,5,6,7
        for (let j = 1; j < i; j++) {
            dp[i] = Math.min(dp[i], (dp[i - j] + dp[j]))
        }
    }
    console.log(dp[number])
})();
