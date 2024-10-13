(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let [n, k] = input[0].split(' ').map(Number)
    let queue = []
    let result = []
    for (let i = 1; i <= n; i++) {
        queue.push(i)
    }


    let count = 1

    while (queue.length >= 1) {

        const shiftItem = queue.shift()
        if (count % k === 0) {
            result.push(shiftItem)
        } else {
            queue.push(shiftItem)
        }
        count += 1
    }
    console.log(`<${result.join(', ')}>`)

}
)();
