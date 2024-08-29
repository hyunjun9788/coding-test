function isCycle(x, prev) {
    visited[x] = true

    for (let y of graph[x]) {
        if (!visited[y]) {
            if (isCycle(y, x)) return true
        }
        else if (y != prev) return true
    }
    return false
}



(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");
    let line = 0
    let caseNumber = 1

    while (line !== input.length - 1) {
        let [n, m] = input[line].split(' ').map(Number)
        if (n === 0 && m === 0) break

        graph = []
        for (let i = 1; i <= n; i++) {
            graph[i] = []
        }

        for (let i = line + 1; i <= m + line; i++) {
            let [x, y] = input[i].split(' ').map(Number)
            graph[x].push(y)
            graph[y].push(x)
        }
        visited = new Array(n + 1).fill(false)
        let treeCount = 0;

        for (let i = 1; i <= n; i++) {
            if (!visited[i]) {
                if (!isCycle(i, 0)) {
                    treeCount++
                }
            }
        }


        if (treeCount === 0) {
            console.log(`Case ${caseNumber}: No trees.`);
        } else if (treeCount === 1) {
            console.log(`Case ${caseNumber}: There is one tree.`);
        } else {
            console.log(`Case ${caseNumber}: A forest of ${treeCount} trees.`);
        }

        line += (m + 1);
        caseNumber++;

    }


})();