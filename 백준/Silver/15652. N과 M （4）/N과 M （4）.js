(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [n, m] = input[0].split(' ').map(Number)
    let arr = Array.from({ length: n }, (v, i) => i + 1)

    let selected = []

    let answers = ''
    const dfs = (start, depth) => {
        if (depth === m) {
            answers += selected.join(" ") + "\n";
            return
        }


        for (let i = start; i < arr.length; i++) {
            selected.push(arr[i])
            dfs(i, depth + 1)
            selected.pop()
        }
    }


    dfs(0, 0)
    console.log(answers)
}
)();
