(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');


    let [a, b] = input[0].split(' ').map(Number)
    let cnt = 0
    while (b !== a) {
        if (b < a) {
            console.log(-1);
            return;
        }
        if (b % 2 === 0) {
            b = b / 2
            cnt++
        }
        else if (b % 10 === 1) {
            b = Math.floor(b / 10);
            cnt++
        }
        else {
            console.log(-1)
            return
        }
    }
    console.log(cnt + 1);
})();