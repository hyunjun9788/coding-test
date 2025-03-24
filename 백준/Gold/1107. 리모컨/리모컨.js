(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const want = Number(input[0]);
  const check = Array.from({ length: 10 }, () => true);
  const m = Number(input[1]);
  if (m > 0) {
    const noButton = input[2].split(" ").map(Number);

    for (let i = 0; i < m; i++) {
      check[noButton[i]] = false;
    }
  }

  function possible(value) {
    if (value === 0) {
      if (!check[0]) {
        return -1;
      }
      return 1;
    }

    let count = 0;
    while (value > 0) {
      if (!check[value % 10]) {
        return -1;
      }
      value = Math.floor(value / 10);
      count += 1;
    }
    return count;
  }

  let min = Math.abs(want - 100);
  for (let i = 0; i <= 1000000; i++) {
    const count = possible(i);
    if (count === -1) {
      continue;
    } else {
      const diff = Math.abs(i - want);
      min = Math.min(min, diff + count);
    }
  }
  console.log(min);
})();
