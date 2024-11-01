(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    let [n, k] = input[0].split(' ').map(Number)
    let result = 0
    for (let i = n; i >= 1; i--) {
        result += parseInt(k / input[i])
        k = k % input[i]
    }
    console.log(result)
})();