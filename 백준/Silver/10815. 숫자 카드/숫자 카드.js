function binarySearch(arr, target, start, end) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            return true
        }
        else if (arr[mid] > target) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return false
}

let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let n = Number(input[0])
    let nArr = input[1].split(' ').map(Number)
    let m = Number(input[2])
    let mArr = input[3].split(' ').map(Number)

    let start = 0
    let end = nArr.length - 1

    nArr.sort((a, b) => a - b)
    let answer = []
    for (let i = 0; i < m; i++) {
        let result = binarySearch(nArr, mArr[i], start, end)

        if (result) {
            answer.push(1)
        } else {
            answer.push(0)
        }
    }
    console.log(answer.join(' '))