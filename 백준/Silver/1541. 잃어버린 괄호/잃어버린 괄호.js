(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let groups = input[0].split('-')
    let answer = 0
    for (let i = 0; i < groups.length; i++) {
        let cur = groups[i].split('+').map(Number).reduce((a, b) => a + b)
        if (i === 0) {
            answer += cur
        }
        else {
            answer -= cur
        }
    }
    console.log(answer)

})();
