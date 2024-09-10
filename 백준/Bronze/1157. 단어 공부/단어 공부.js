(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let word = input[0].toLowerCase().split('')
    const alphabetArr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97))
    let countArr = Array.from({ length: 26 }, () => 0)

    word.forEach((v, i) => countArr[alphabetArr.indexOf(v)]++)

    let maxValue = 0
    let same = 0
    let index = 0
    for (let i = 0; i < countArr.length; i++) {
        if (maxValue < countArr[i]) {
            maxValue = countArr[i]
            index = i
        }

    }

    countArr.sort((a, b) => b - a)
    if (countArr[0] === countArr[1]) {
        console.log('?')
    }
    else {
        console.log(alphabetArr[index].toUpperCase())
    }
})();
