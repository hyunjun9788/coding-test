(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    const n = Number(input[0])
    let answer = 999999999
    const ingre = []
    for (let i = 1; i <= n; i++) {
        ingre.push(input[i].split(' ').map(Number))
    }

    function recur(idx, dan, zzan, use) {

        if (idx === n) {
            if (use === 0) {
                return
            }
            const result = Math.abs(dan - zzan)
            answer = Math.min(answer, result)
            return
        }

        recur(idx + 1, dan * ingre[idx][0], zzan + ingre[idx][1], use + 1)
        recur(idx + 1, dan, zzan, use)
    }

    recur(0, 1, 0, 0)
    console.log(answer)
}

)();
