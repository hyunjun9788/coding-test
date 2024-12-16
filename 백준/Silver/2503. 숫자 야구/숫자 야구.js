(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let n = Number(input[0])
    let answer = 0
    const hint = []

    for (let i = 1; i <= n; i++) {
        hint.push(input[i].split(' ').map(Number))
    }

    const checker = (idx, number) => {
        const _number = hint[idx][0]
        const _strike = hint[idx][1]
        const _ball = hint[idx][2]

        let strike = 0
        let ball = 0


        const _A = Math.floor(_number / 100)
        const _B = Math.floor((_number % 100) / 10)
        const _C = _number % 10

        const A = Math.floor(number / 100);
        const B = Math.floor((number % 100) / 10);
        const C = number % 10;

        if (A === 0 || B === 0 || C === 0) return false;
        if (A === B || A === C || B === C) return false;

        if (A === _A) strike++;
        if (B === _B) strike++;
        if (C === _C) strike++;


        if (A === _B || A === _C) ball++;
        if (B === _A || B === _C) ball++;
        if (C === _A || C === _B) ball++;

        return strike === _strike && ball === _ball;
    }
    const recur = (idx, number) => {
        if (idx === n) {
            answer += 1
            recur(0, number + 1)
            return
        }

        if (number === 1000) {
            return
        }

        if (checker(idx, number)) {
            recur(idx + 1, number)
        } else {
            recur(0, number + 1)
        }
    }

    recur(0, 100)
    console.log(answer)
}

)();
