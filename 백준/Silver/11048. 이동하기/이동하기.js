(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const arr = [];
  const dp = Array.from({ length: n + 1 }, () => []);
  for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      dp[i][j] = 0;
    }
  }

  dp[1][1] = arr[0][0];
  for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= m; x++) {
      dp[y][x] = Math.max(dp[y - 1][x], dp[y - 1][x - 1], dp[y][x - 1]) + arr[y - 1][x - 1];
    }
  }
  console.log(dp[n][m]);
})();
