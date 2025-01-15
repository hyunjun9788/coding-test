(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const N = Number(input[0]);

  const arr = [];
  let maxCount = 0;

  for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(""));
  }
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[y].length; x++) {
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (nx < 0 || nx > arr[y].length - 1 || ny < 0 || ny > arr.length - 1) {
          continue;
        }
        [arr[y][x], arr[ny][nx]] = [arr[ny][nx], arr[y][x]];
        maxCount = Math.max(maxCount, countMaxCandy(arr));

        [arr[y][x], arr[ny][nx]] = [arr[ny][nx], arr[y][x]];
      }
    }
  }

  function countMaxCandy(arr) {
    let max = 0;

    for (let i = 0; i < N; i++) {
      let count = 1;
      for (let j = 1; j < N; j++) {
        if (arr[i][j] === arr[i][j - 1]) {
          count++;
          max = Math.max(count, max);
        } else {
          count = 1;
        }
      }
    }

    for (let j = 0; j < N; j++) {
      let count = 1;

      for (let i = 1; i < N; i++) {
        if (arr[i][j] === arr[i - 1][j]) {
          count++;
          max = Math.max(count, max);
        } else {
          count = 1;
        }
      }
    }
    return max;
  }
  console.log(maxCount);
})();
