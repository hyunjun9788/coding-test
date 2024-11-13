(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');


    const n = Number(input[0])

    let a = input[1].split(' ').map(Number)
    let b = input[2].split(' ').map(Number)

    a.sort((a, b) => a - b)
    b.sort((a, b) => b - a)
    let result = 0
    for (let i = 0; i < n; i++) {
        result += a[i] * b[i]
    }
    console.log(result)
})();