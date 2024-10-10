(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let cnt = Number(input[0])

    let arr = [0, 1]
    let index = 0

    if (cnt === 0) {
        console.log(0)
        return
    }
    if (cnt === 1) {
        console.log(1)
        return
    }
    for (let i = 2; i <= cnt; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
        index = i
    }
    console.log(arr[index])
}
)();
