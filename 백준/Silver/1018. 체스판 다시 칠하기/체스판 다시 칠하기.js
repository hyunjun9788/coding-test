(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const W = Array.from({ length: n }, () => []);
  const B = Array.from({ length: n }, () => []);
  const allArr = [];

  for (let i = 1; i < input.length; i++) {
    const row = input[i].trim().split("");
    allArr.push(row);
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          W[i][j] = "W";
          B[i][j] = "B";
        } else {
          W[i][j] = "B";
          B[i][j] = "W";
        }
      } else {
        if (j % 2 === 0) {
          W[i][j] = "B";
          B[i][j] = "W";
        } else {
          W[i][j] = "W";
          B[i][j] = "B";
        }
      }
    }
  }

  let min = 64;

  for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
      let sumW = 0;
      let sumB = 0;

      for (let k = i; k < i + 8; k++) {
        for (let l = j; l < j + 8; l++) {
          if (allArr[k][l] !== W[k - i][l - j]) {
            sumW += 1;
          }
          if (allArr[k][l] !== B[k - i][l - j]) {
            sumB += 1;
          }
        }
      }

      min = Math.min(min, sumW);
      min = Math.min(min, sumB);
    }
  }
  console.log(min);
})();
