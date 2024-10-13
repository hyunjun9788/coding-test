(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let n = Number(input[0])
    let queue = []
    let result = []
    for (let i = 1; i <= n; i++) {
        let type = input[i].trim().split(' ')

        if (type[0] === 'push') {
            queue.push(Number(type[1]))
            continue
        }

        if (type[0] === 'front' && queue.length >= 1) {
            result.push(queue[0])
        } else if (type[0] === 'front' && queue.length === 0) {
            result.push(-1)
        }

        if (type[0] === 'back' && queue.length >= 1) {
            result.push(queue[queue.length - 1])
        } else if (type[0] === 'back' && queue.length === 0) {
            result.push(-1)
        }

        if (type[0] === 'pop' && queue.length >= 1) {
            result.push(queue.shift())
        } else if (type[0] === 'pop' && queue.length === 0) {
            result.push(-1)
        }

        if (type[0] === 'empty' && queue.length === 0) {
            result.push(1)
        } else if (type[0] === 'empty' && queue.length !== 0) {
            result.push(0)
        }
        if (type[0] === 'size') {
            result.push(queue.length)
        }
    }
    console.log(result.join('\n'))
}
)();
