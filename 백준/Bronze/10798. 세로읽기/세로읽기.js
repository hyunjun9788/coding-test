(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let arr = Array.from({ length: 5 }, () => [])
    let result = ''
    let length = []


    for (let i = 0; i < 5; i++) {
        arr[i] = input[i].trim().split('')
        length.push(arr[i].length)
    }
    let max = Math.max(...length)
    for (let i = 0; i < Number(max); i++) {
        for (let j = 0; j < 5; j++) {
            if (arr[j][i] == undefined) {
                result += ''
                continue
            }
            result += arr[j][i]
        }
    }
    console.log(result)
})();