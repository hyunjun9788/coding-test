(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');
    const arr = Array.from({ length: 12 }, () => '')

    arr[0] = '-'

    for (let i = 1; i <= 12; i++) {
        arr[i] = arr[i - 1] + (' '.repeat(3 ** (i - 1))) + arr[i - 1]
    }


    for (let i = 0; i < input.length; i++) {

        const n = Number(input[i])
        console.log(arr[n])
    }
})();