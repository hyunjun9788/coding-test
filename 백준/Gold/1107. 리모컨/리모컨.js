(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const want = Number(input[0]);

  const disabledCheck = Array.from({ length: 10 }, () => false);
  const disabledBtnCnt = Number(input[1]);

  if (disabledBtnCnt >= 1) {
    const disabledBtns = input[2].split(" ").map(Number);
    for (let i = 0; i < disabledBtns.length; i++) {
      disabledCheck[disabledBtns[i]] = true;
    }
  }

  function possible(value) {
    if (value === 0) {
      if (disabledCheck[0]) {
        return -1;
      }
      return 1;
    }

    let count = 0;
    while (value > 0) {
      if (disabledCheck[value % 10]) {
        return -1;
      }
      value = Math.floor(value / 10);
      count++;
    }
    return count;
  }

  let min = Math.abs(want - 100);

  for (let i = 0; i <= 1000000; i++) {
    const count = possible(i);
    if (count === -1) {
      continue;
    }
    min = Math.min(min, count + Math.abs(want - i));
  }

  console.log(min);
})();
