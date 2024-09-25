(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let n = Number(input[0]);
    let answer = [];

    for (let i = 1; i <= n; i++) {
        let arr = input[i].match(/\d+/g);

        if (arr) {
            arr.map((num) => answer.push(BigInt(num)));
        }
    }

    answer.sort((a, b) => (a > b ? 1 : -1))
    console.log(answer.join('\n'));
})();
