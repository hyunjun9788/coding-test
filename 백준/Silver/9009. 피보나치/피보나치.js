(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');


    let pibo = []
    pibo.push(0)
    pibo.push(1)
    while (pibo[pibo.length - 1] < 1e9) {
        pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1])
    }
    const testCase = Number(input[0])
    for (let tc = 1; tc <= testCase; tc++) {
        let n = Number(input[tc])
        let result = []
        let i = pibo.length - 1

        while (n > 0) {
            if (n >= pibo[i]) {
                n -= pibo[i]
                result.push(pibo[i])
            }
            i--
        }
        let answer = ''
        for (let i = result.length - 1; i >= 0; i--) {
            answer += result[i] + ' '

        }
        console.log(answer)
    }

})();