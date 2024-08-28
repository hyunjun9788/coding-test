function binarySearch(arr, target, start, end, result) {

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            return true
        }
        else if (arr[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return false;
}

let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");
    let n = Number(input[0])
    let m = Number(input[2]);
    let targetArr = input[3].split(' ').map(Number)
    let arr = input[1].split(' ').map(Number)

    arr.sort((a, b) => a - b)

    let result = []

    for (let i = 0; i < m; i++) {
        if (binarySearch(arr, targetArr[i], 0, n - 1)) {
            result.push('1')
        }
        else {
            result.push('0');
        }
    }

    console.log(result.join('\n'));