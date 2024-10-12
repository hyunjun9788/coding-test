(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let cnt = Number(input[0])
    let result = []
    let stack = []
    let value = 1

    for (let i = 1; i <= cnt; i++) {
        let num = Number(input[i])


        while (value <= num) {
            stack.push(value)
            value++
            result.push("+")
        }

        let stackPop = stack.pop()
        result.push("-")


        if (stackPop !== num) {
            result = ["NO"]
            break
        }
    }

    console.log(result.join("\n"));

}
)();
