(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim()

    let stick = []
    let cnt = 0
    let i = 0

    while (i < input.length) {
        if (i < input.length - 1 && input[i] === '(' && input[i + 1] === ')') {
            cnt += stick.length
            i += 2
            continue
        }

        if (input[i] === '(') {
            stick.push('(')
            i++
        } else {
            stick.pop()
            cnt++
            i++
        }

    }
    console.log(cnt)
}
)();
