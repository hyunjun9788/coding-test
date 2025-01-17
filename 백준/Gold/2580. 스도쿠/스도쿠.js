(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const arr = [];
  const pos = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        pos.push([i, j]);
      }
    }
  }

  function isPossible(y, x, n) {
    for (let c = 0; c < 9; c++) {
      if (arr[y][c] === n) return false;
    }

    for (let r = 0; r < 9; r++) {
      if (arr[r][x] === n) return false;
    }

    let startY = Math.floor(y / 3) * 3;
    let startX = Math.floor(x / 3) * 3;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (arr[startY + r][startX + c] === n) {
          return false;
        }
      }
    }
    return true;
  }

  function search(lev) {
    if (lev === pos.length) {
      console.log(arr.map((row) => row.join(" ")).join("\n"));
      process.exit(0);
    }

    let [y, x] = pos[lev];

    for (let n = 1; n <= 9; n++) {
      if (isPossible(y, x, n)) {
        arr[y][x] = n;
        search(lev + 1);
        arr[y][x] = 0;
      }
    }
  }
  search(0);
})();
