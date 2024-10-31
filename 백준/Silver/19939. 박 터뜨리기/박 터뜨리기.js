(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    let [n, k] = input[0].split(' ').map(Number)

    let summary = 0
    for (let i = 1; i <= k; i++) {
        summary += i
    }

    if (n < summary) {
        console.log(-1)
        return
    }
    else {
        n -= summary
        if (n % k === 0) {
            console.log(k - 1)
        } else {
            console.log(k)
        }
    }
})();