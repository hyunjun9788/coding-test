(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let cnt = Number(input[0])
    let regexp = /^[A-F]?A+F+C+[A-F]?$/
    let result = []
    for (let i = 1; i <= cnt; i++) {
        const str = input[i].trim()
        if (regexp.test(str)) {
            result.push("Infected!")
        } else {
            result.push("Good")
        }
    }
    console.log(result.join('\n'))

})();