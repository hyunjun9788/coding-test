(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");
    let str = input[0].trim().split('')
    let str2 = [...str]
    let result = []
    result.push(str2)
    for (let i = 0; i < input[0].length; i++) {
        if (str.length >= 2) {
            str.shift()
            let str3 = [...str]
            result.push(str3)
        }

    }


    const sortedStrings = result.map(v => v.join('')).sort()
    console.log(sortedStrings.join('\n'))
})();
