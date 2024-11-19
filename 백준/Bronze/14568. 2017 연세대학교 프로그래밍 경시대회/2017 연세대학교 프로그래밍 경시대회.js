(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const n = Number(input[0])

    let answer = 0
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {
                if (i + j + k === n) {
                    if (i >= j + 2) {
                        if (i !== 0 && j !== 0 && k !== 0) {
                            if (k % 2 === 0) {
                                answer += 1
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(answer)

})();