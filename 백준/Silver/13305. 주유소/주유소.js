(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');


    let n = Number(input[0])

    let dist = input[1].split(' ').map(Number)
    let cost = input[2].split(' ').map(Number)

    let minCost = cost[0]
    for (let i = 0; i < n; i++) {
        minCost = Math.min(minCost, cost[i])
        cost[i] = minCost
    }


    let answer = BigInt(0)

    for (let i = 0; i < n - 1; i++) {
        answer += BigInt(dist[i]) * BigInt(cost[i])
    }

    console.log(String(answer))
})();