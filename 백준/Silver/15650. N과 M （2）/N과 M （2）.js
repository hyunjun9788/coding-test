(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    const [n, m] = input[0].split(' ').map(Number)
    function recur(number, output) {

        if (output.length === m) {
            console.log(output.join(' '))
            return
        }


        for (let i = number; i <= n; i++) {
            recur(i + 1, [...output, i]);

        }
    }
    recur(1, [])

}
)();
