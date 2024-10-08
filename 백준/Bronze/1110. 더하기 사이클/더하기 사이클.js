(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let result = Number(input);
    let count = 0;
    while (true) {
        let sum = Math.floor(result / 10) + result % 10;
        result = (result % 10) * 10 + sum % 10;
        count++;
        if (Number(input) === result) {
            break;
        }
    }

    console.log(count);
}
)();
