(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    const testCase = Number(input[0])
    let line = 1

    for (let i = 1; i <= testCase; i++) {
        let n = Number(input[line])
        let arr = []

        for (let j = line + 1; j <= line + n; j++) {
            let data = input[j].split(' ').map(Number)
            arr.push(data)
        }

        arr.sort((a, b) => a[0] - b[0])
        let count = 0
        let maxValue = 100001
        for (let [x, y] of arr) {
            if (y < maxValue) {
                count++
                maxValue = y
            }
        }

        console.log(count)
        line += n + 1
    }


})();
