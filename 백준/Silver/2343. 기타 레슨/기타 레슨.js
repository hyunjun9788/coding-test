(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [N, M] = input[0].split(" ").map(Number);
  const lessons = input[1].split(" ").map(Number);

  let left = Math.max(...lessons);
  let right = lessons.reduce((a, b) => a + b, 0);
  let answer = right;

  function countBluRays(size) {
    let count = 1;
    let sum = 0;

    for (let i = 0; i < N; i++) {
      if (sum + lessons[i] > size) {
        count++;
        sum = 0;
      }
      sum += lessons[i];
    }

    return count;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let requiredBluRays = countBluRays(mid);

    if (requiredBluRays <= M) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(answer);
})();
