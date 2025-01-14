(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const W = Array.from({ length: n }, () => []);
  const B = Array.from({ length: n }, () => []);
  const patterns = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
        W[i][j] = "W";
        B[i][j] = "B";
      }
      if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
        W[i][j] = "B";
        B[i][j] = "W";
      }
    }
  }

  let bResult = [];
  let wResult = [];
  for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
      const pattern = [];

      for (let k = 0; k < 8; k++) {
        pattern.push(input[i + 1 + k].slice(j, j + 8).split(""));
      }
      let bCount = 0;
      let wCount = 0;
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (B[x][y] !== pattern[x][y]) {
            bCount++;
          }
          if (W[x][y] !== pattern[x][y]) {
            wCount++;
          }
        }
      }

      bResult.push(bCount);
      wResult.push(wCount);

      patterns.push(pattern);
    }
  }
  console.log(Math.min(...bResult, ...wResult));
})();
