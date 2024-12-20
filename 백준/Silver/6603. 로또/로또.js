(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');


    for (let i = 0; i < input.length - 1; i++) {
        const inputArr = input[i].split(' ').map(Number)
        const k = inputArr[0]
        const arr = []

        const result = []

        for (let j = 1; j <= k; j++) {
            arr.push(inputArr[j])
        }
        function combination(index, level) {

            if (level === 6) {
                console.log(result.join(' '))
                return
            }
            for (let k = index; k < arr.length; k++) {
                result.push(arr[k])
                combination(k + 1, level + 1)
                result.pop()
            }
        }

        combination(0, 0)
        console.log('')

    }
})();