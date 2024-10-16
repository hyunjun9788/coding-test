(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let arr = input[0]


    let alphabetArr = Array.from({ length: Number('z'.charCodeAt(0)) - Number('a'.charCodeAt(0)) + 1 }, (_, i) => String.fromCharCode(i + 97))

    let result = []
    for (let i = 0; i < alphabetArr.length; i++) {

        result.push((arr.indexOf(alphabetArr[i])))


    }
    console.log(result.join(' '))
}
)();
