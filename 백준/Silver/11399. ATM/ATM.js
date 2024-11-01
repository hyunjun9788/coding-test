(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let N = Number(input[0])
    let arr = input[1].split(' ').map(Number)
    arr.sort((a,b)=>a-b)

    for (let i = 1; i < N; i++) {
        arr[i] = arr[i - 1] + arr[i]
    }

    let sum = arr.reduce((acc, cur) => acc + cur, 0)
    console.log(sum)
})();