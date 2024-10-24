(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let N = Number(input[0])
    let arr = input[1].split(' ').map(Number)
    arr.sort((a, b) => a - b)


    let sum = 0
    let accumulated = 0
    for (let i = 0; i < N; i++) {
        accumulated += arr[i]
        sum += accumulated
    }


    console.log(sum)
})();
