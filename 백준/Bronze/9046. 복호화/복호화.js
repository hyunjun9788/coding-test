(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let alphabetArr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

    let T = parseInt(input[0]);
    for (let line = 1; line <= T; line++) {
        let resultArr = new Array(26).fill(0)
        let arr1 = input[line].split(' ').join('').split('')

        for (let i = 0; i < arr1.length; i++) {
            let index = alphabetArr.indexOf(arr1[i])
            resultArr[index] += 1
        }
        console.log(findMaxIndex(resultArr))
    }
    function findMaxIndex(arr) {
        let maxValue = Math.max(...arr);
        let maxCount = 0;
        let maxIndex = -1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === maxValue) {
                maxCount++
                maxIndex = i
            }
        }

        if (maxCount > 1) {
            return '?';
        } else {
            return alphabetArr[maxIndex];
        }
    }


})();

