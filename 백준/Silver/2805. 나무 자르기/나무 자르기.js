(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const trees = input[1].split(" ").map(Number);

  let l = 0;
  let r = 1000000000;

  while (l <= r) {
    let sum = 0;
    let mid = Math.floor((l + r) / 2);

    for (let i = 0; i < trees.length; i++) {
      if (trees[i] > mid) {
        sum += trees[i] - mid;
      }
    }

    if (sum >= m) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  console.log(r);
})();
