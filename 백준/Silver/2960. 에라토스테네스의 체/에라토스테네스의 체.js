
(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let [n, k] = input[0].split(' ').map(Number)
    const arr = []
    for (let i = 2; i <= n; i++) {
        arr.push(i)
    }

    let cnt = 0
    let prime
    let answer

    while (cnt < k) {
        prime = arr[0]
        arr.some((v) => {
            if (v % prime === 0) {
                arr.splice(arr.indexOf(v), 1)
                answer = v;
                cnt++

            }
            if (cnt === k) {
                return true
            }
        })
    }
    console.log(answer);
})();