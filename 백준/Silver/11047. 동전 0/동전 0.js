(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let N = input[0].split(' ').map(Number)[0]
    let K = input[0].split(' ').map(Number)[1]
    
    const arr = Array.from({ length: N + 1 }, () => 0)

    for (let i = 1; i <= N; i++) {
        arr[i] = Number(input[i])
    }

    let cnt = 0
    for (let i = N; i >= 1; i--) {
        cnt += parseInt(K / arr[i])
        K %= arr[i]
    }

    console.log(cnt)
})();
