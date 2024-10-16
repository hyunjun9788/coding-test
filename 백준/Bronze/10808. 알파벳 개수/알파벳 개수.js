(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let arr = input[0].toUpperCase()


    let alphabetArr = Array.from({ length: Number('Z'.charCodeAt(0)) - Number('A'.charCodeAt(0)) + 1 }, () => 0)

    for (let i = 0; i < arr.length; i++) {
        alphabetArr[arr[i].charCodeAt(0) - 'A'.charCodeAt(0)]++
    }
    console.log(alphabetArr.join(' '))
}
)();
