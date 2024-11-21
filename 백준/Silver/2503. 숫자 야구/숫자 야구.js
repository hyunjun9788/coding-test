(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let n = Number(input[0])

    const question = []

    let answer = 0

    for (let i = 1; i <= n; i++) {
        question.push(input[i].split(' ').map(Number))
    }

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                if (a === b || a === c || b === c) { continue }

                let check = 0

                for (const [target, strike, ball] of question) {
                    const str = '' + target;
                    const cur = String(a) + String(b) + String(c)
                    const count = [0, 0]

                    for (let l = 0; l < str.length; l++) {
                        const index = cur.indexOf(str[l])

                        if (index === l) {
                            count[0] += 1
                        } else if (index !== -1) {
                            count[1] += 1
                        }
                    }
                    if (strike === count[0] && ball === count[1]) {
                        check += 1
                    }
                }
                if (check === n) {
                    answer += 1
                }
            }
        }
    }
    console.log(answer)
}



)();
