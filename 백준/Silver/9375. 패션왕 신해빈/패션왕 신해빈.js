
(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    const n = +input[0]

    let cursor = 0

    for (let i = 1; i <= n; i++) {
        const map = {}

        const t = +input[++cursor]

        for (let j = 1; j <= t; j++) {
            input[j + cursor] = input[j + cursor].split(' ')
            const cloth = input[j + cursor][0]
            const kinds = input[j + cursor][1]

            if (map[kinds]) {
                map[kinds].push(cloth)
            } else {
                map[kinds] = [cloth]
            }
        }
        cursor += t

        let cnt = 1
        for (const key in map) {
            cnt *= map[key].length + 1
        }
        console.log(cnt - 1)
    }
})();