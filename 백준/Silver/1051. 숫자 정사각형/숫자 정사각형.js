(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const square = [];

  for (let i = 1; i < input.length; i++) {
    square.push(input[i].trim());
  }
  let size = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let limitLen = Math.min(n - i, m - j);

      for (let k = 1; k < limitLen; k++) {
        if (
          square[i][j] === square[i + k][j] &&
          square[i][j] === square[i][j + k] &&
          square[i][j] === square[i + k][j + k]
        ) {
          size = Math.max(size, k + 1);
        }
      }
    }
  }

  console.log(size * size);
})();
