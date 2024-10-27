(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');


    let S = Number(input[0])
    let current = 0
    let sum = 0
    while (sum <= S) {
        current += 1
        sum += current
    }

    console.log(current - 1)
})();