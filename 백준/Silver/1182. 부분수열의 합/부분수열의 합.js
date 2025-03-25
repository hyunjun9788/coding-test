(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, s] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  const result = [];

  let answer = 0;

  function recur(index, sum, count) {
    if (index >= n) {
      if (sum === s && count > 0) {
        answer++;
      }
      return;
    }

    recur(index + 1, sum + arr[index], count + 1);
    recur(index + 1, sum, count);
  }

  recur(0, 0, 0);

  console.log(answer);
})();