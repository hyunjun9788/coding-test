(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let n = Number(input[0])
    let a = input[1].split(' ').map(Number)

    let visited = Array(n).fill(false)
    let queue = []
    queue.push([0, 0])
    visited[0] = true

    while (queue.length) {
        let [current, jumps] = queue.shift()

        if (current === n - 1) {
            console.log(jumps)
            return
        }
        for (let j = 1; j <= a[current]; j++) {
            let next = current + j

            if (next < n && !visited[next]) {
                visited[next] = true
                queue.push([next, jumps + 1])
            }
        }
    }

    console.log(-1)

})();

