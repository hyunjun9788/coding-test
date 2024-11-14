(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");



    let [n, l] = input[0].split(' ').map(Number)
    let arr = input[1].split(' ').map(Number)

    arr.sort((a, b) => a - b)
    let currentEnd = 0
    let tape = 0
    for (let i = 0; i < arr.length; i++) {
        let position = arr[i]


        if (currentEnd < position) {
            tape++
            currentEnd = position + l - 1
        }
    }

    console.log(tape)
})();
