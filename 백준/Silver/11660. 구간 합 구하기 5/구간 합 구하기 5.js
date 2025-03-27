(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const arr = Array.from({ length: 1 }, () => Array(n + 1).fill(0));

  const sumArr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const row = [0];
    row.push(...input[i].split(" ").map(Number));
    arr.push(row);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      sumArr[i][j] = sumArr[i - 1][j] + sumArr[i][j - 1] - sumArr[i - 1][j - 1] + arr[i][j];
    }
  }
  let answer = "";

  for (let i = n + 1; i < input.length; i++) {
    let sum = 0;
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

    sum += sumArr[x2][y2] - sumArr[x1 - 1][y2] - sumArr[x2][y1 - 1] + sumArr[x1 - 1][y1 - 1];

    answer += sum + "\n";
  }

  console.log(answer);
})();
