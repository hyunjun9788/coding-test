(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const paper = Array.from({ length: 100 }, () => Array(100).fill(false));

  for (let i = 1; i < input.length; i++) {
    const [x, y] = input[i].split(" ").map(Number);

    for (let j = x; j < x + 10; j++) {
      for (let k = y; k < y + 10; k++) {
        paper[j][k] = true;
      }
    }
  }

  let sum = 0;

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (paper[i][j]) {
        sum++;
      }
    }
  }

  console.log(sum);
})();
