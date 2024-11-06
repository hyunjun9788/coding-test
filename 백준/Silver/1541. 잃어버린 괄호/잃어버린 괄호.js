(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    let arr = (input[0].split('-'))

    let sum = 0
    for (let i = 0; i < arr.length; i++) {

        let subSum = arr[i].split('+').reduce((acc, cur) => acc + Number(cur), 0);

        if (i === 0) {
            sum += subSum;
        } else {
            sum -= subSum;
        }
    }
    console.log(sum)
})();