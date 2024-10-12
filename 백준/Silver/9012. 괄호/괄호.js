(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let num = Number(input[0])
    let result = [];
    for (let i = 1; i <= num; i++) {
        let sum = 0
        let line = input[i].trim().split('')
        let isValid = true;


        if (line[0] === ')') {
            result.push('NO');
            continue
        }

        for (let j = 0; j < line.length; j++) {
            if (line[j] === '(') {
                sum += 1
            } else if (line[j] === ')') {
                sum -= 1
            }
            if (sum < 0) {
                isValid = false
                break
            }
        }

        if (isValid && sum === 0) {
            result.push('YES')
        } else {
            result.push('NO');
        }
    }
    console.log(result.join('\n'))


}
)();
