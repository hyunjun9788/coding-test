(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    const leftStack = input.shift().split('');
    const N = input.shift();
    const rightStack = [];
    for (let i = 0; i < N; i++) {
        let tmp = input[i].toLowerCase().trim();
        switch (tmp) {
            case 'l':
                if (leftStack.length !== 0) {
                    rightStack.push(leftStack.pop());
                }
                break;
            case 'd':
                if (rightStack.length !== 0) {
                    leftStack.push(rightStack.pop());
                }
                break;
            case 'b':
                if (leftStack.length !== 0) {
                    leftStack.pop();
                }
                break;
            default:
                leftStack.push(tmp.split(' ')[1]);
                break;
        }
    }

    console.log((leftStack.concat(rightStack.reverse())).join(''))
})();