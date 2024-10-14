(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let n = Number(input[0])
    let deque = []
    let result = []
    for (let i = 1; i <= n; i++) {
        const arr = input[i].trim().split(' ')

        if (arr[0] === 'push_front') {
            deque.unshift(Number(arr[1]))
        }
        else if (arr[0] === 'push_back') {
            deque.push(Number(arr[1]))
        }
        else if (arr[0] === 'pop_front') {
            if (!deque.length) {
                result.push(-1)
                continue
            }
            const shift = deque.shift()
            result.push(Number(shift))
        }

        else if (arr[0] === 'pop_back') {
            if (!deque.length) {
                result.push(-1)
                continue
            }
            const shift = deque.pop()
            result.push(Number(shift))
        }
        else if (arr[0] === 'size') {
            result.push(Number(deque.length))
        }
        else if (arr[0] === 'empty') {
            if (!deque.length) {
                result.push(1)
            } else {
                result.push(0)
            }
        }
        else if (arr[0] === 'front') {
            if (!deque.length) {
                result.push(-1)
            } else
                result.push(deque[0])
        }

        else if (arr[0] === 'back') {
            if (!deque.length) {
                result.push(-1)
            } else
                result.push(deque[deque.length - 1])
        }

    }

    console.log(result.join('\n'))

}
)();
