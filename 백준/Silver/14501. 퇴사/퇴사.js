(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const n = Number(input[0]);

  const arr = [0];

  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  let answer = 0;

  function recur(index, sum) {
    answer = Math.max(answer, sum);

    if (index > n) {
      return;
    }

    const [t, p] = arr[index];

    if (index + t <= n + 1) {
      recur(index + t, sum + p);
    }

    if (index + 1 <= n) {
      recur(index + 1, sum);
    }
  }

  recur(1, 0);
  console.log(answer);
})();
