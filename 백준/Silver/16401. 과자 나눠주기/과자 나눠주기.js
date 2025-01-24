(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [M, N] = input[0].split(" ").map(Number);
  const snacks = input[1].split(" ").map(Number);

  let left = 1;
  let right = Math.max(...snacks);
  let answer;
  function countPieces(length) {
    return snacks.reduce((sum, snack) => sum + Math.floor(snack / length), 0);
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let pieces = countPieces(mid);

    if (pieces >= M) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (!answer) {
    console.log(0);
    return;
  }
  console.log(answer);
})();
