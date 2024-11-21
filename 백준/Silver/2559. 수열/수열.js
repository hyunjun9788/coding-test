(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    const [n, k] = input[0].split(' ').map(Number)
    const arr = input[1].split(' ').map(Number)
    const prefix = [0]
    let result = []
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + arr[i]
    }

    for (let i = 0; i <= n - k; i++) {
        result.push(prefix[i + k] - prefix[i])
    }

    console.log(Math.max(...result))
}


)();
