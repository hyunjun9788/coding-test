(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");


    let [a, b, ...c] = input
    let obj = {}
    let start = 65

    let stack = []

    for (let el of c) {
        obj[String.fromCharCode(start++)] = +el
    }

    const createOperation = (operator) => {
        const y = stack.pop();
        const x = stack.pop();
        if (operator === "+") stack.push(x + y);
        else if (operator === "-") stack.push(x - y);
        else if (operator === "*") stack.push(x * y);
        else if (operator === "/") stack.push(x / y);
    };

    for (let el of b) {
        // 참고1) 조건문 작성 시 주의
        if (el === "+" || el === "-" || el === "*" || el === "/") createOperation(el);
        else stack.push(obj[el]);
    }

    console.log(stack[0].toFixed(2));
})();