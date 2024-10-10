(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let n = Number(input[0])
    let arr = Array.from({ length: n }, (_, i) => i + 1)
    let selected = []
    let visited = Array.from({ length: n }, () => false)

    let answers = ''
    const dfs = (arr, depth) => {
        if (depth === n) {
            let result = []
            for (let i of selected) {
                result.push(arr[i])
            }
            for (let x of result) answers += x + " "
            answers += "\n"
            return
        }


        for (let i = 0; i < arr.length; i++) {
            if (visited[i]) continue
            selected.push(i)
            visited[i] = true
            dfs(arr, depth + 1)
            selected.pop()
            visited[i] = false
        }
    }

    dfs(arr, 0)
    console.log(answers)

}
)();
