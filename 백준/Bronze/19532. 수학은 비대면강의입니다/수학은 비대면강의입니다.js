(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const arr = input[0].split(' ').map(Number)
    let result = []

    for (let i = -999; i <= 999; i++) {
        for (let j = -999; j <= 999; j++) {
            if (i * arr[0] + j * arr[1] === arr[2] && i * arr[3] + j * arr[4] === arr[5]) {
                result = [i, j]
            }
        }
    }
    console.log(result.join(' '))

})();