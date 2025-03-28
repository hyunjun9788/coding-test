(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  let line = 1;

  while (line < input.length) {
    const arr = input[line + 1].split(" ").map(Number);
    const sum = Array.from({ length: arr.length }, () => 0);

    let currentSum = arr[0];
    let maxSum = arr[0];

    sum[0] = arr[0];

    for (let i = 1; i < sum.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    console.log(maxSum);
    line += 2;
  }
})();
