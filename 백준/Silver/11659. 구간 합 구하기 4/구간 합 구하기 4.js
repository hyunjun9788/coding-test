(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  const preSum = Array.from({ length: n + 1 }, () => 0);

  preSum[1] = arr[0];
  for (let i = 2; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + arr[i - 1];
  }

  for (let i = 2; i < input.length; i++) {
    const [start, end] = input[i].split(" ").map(Number);

    const sum = preSum[end] - preSum[start - 1];
    console.log(sum);
  }
})();
