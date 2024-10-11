(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let num = Number(input[0])
    let result = []
    let stack = []

    for (let i = 1; i <= num; i++) {
        let arr = input[i].trim().split(' ')
        if (arr[0] === 'push') {
            stack.push(arr[1])
        }
        else if (arr[0] === 'top') {
            if (stack.length >= 1) {
                result.push(stack[stack.length - 1])
            } else {
                result.push(-1)
            }

        }
        else if (arr[0] === 'size') {
            result.push(stack.length)
        }
        else if (arr[0] === 'pop') {
            if (stack.length >= 1) {
                let a = stack.pop()
                result.push(a)
            }
            else {
                result.push(-1)
            }
        }
        else {
            if (stack.length === 0) {
                result.push(1)

            } else {
                result.push(0)
            }
        }
    }
    console.log(result.join('\n'))
}
)();
