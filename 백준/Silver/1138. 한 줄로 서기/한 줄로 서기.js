(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    const n = Number(input[0]);
    const leftCounts = input[1].split(" ").map(Number);
    const result = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const count = leftCounts[i];
        let emptySpots = 0;

        for (let j = 0; j < n; j++) {
            if (result[j] === 0) emptySpots++;

            if (emptySpots > count) {
                result[j] = i + 1;
                break;
            }
        }
    }

    console.log(result.join(' '))
})();
