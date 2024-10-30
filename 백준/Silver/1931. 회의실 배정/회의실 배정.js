(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    let n = Number(input.shift())
    let arr = (input.map((v) => v.split(' ').map(Number)))
    arr.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

    let minEndTime = 0
    let count = 0
    for (let i = 0; i < n; i++) {
        let timeInfo = arr[i]
        if (timeInfo[0] >= minEndTime) {
            minEndTime = timeInfo[1]
            count++
        }
    }

    console.log(count)


})();