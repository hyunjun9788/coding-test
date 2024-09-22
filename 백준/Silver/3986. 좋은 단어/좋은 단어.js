(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let n = Number(input[0])

    let count = 0
    for (let i = 1; i <= n; i++) {
        let arr = input[i].split('')

        const stack = []

        for (let letter of arr) {
            if (stack.length && stack[stack.length - 1] === letter) {
                stack.pop()
            }
            else {
                stack.push(letter)
            }
        }
        if (stack.length === 0) {
            count++
        }

    }
    console.log(count)

})();