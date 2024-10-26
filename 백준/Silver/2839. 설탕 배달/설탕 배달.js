(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');


    const N = Number(input[0])
    let current = N
    let cnt = 0
    let flag = false

    while (current >= 0) {
        if (current % 5 === 0) {
            let value = Math.floor(current / 5)
            cnt += value
            console.log(cnt)
            flag = true
            break
        }
        current -= 3
        cnt += 1
    }

    if (!flag) {
        console.log(-1)
    }
})();