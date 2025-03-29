(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const n = Number(input[0]);
  const nums = input[1].split(" ").map(Number);
  const operators = input[2].split(" ").map(Number);
  const operObj = {
    0: (oper1, oper2) => oper1 + oper2,
    1: (oper1, oper2) => oper1 - oper2,
    2: (oper1, oper2) => oper1 * oper2,
    3: (oper1, oper2) => {
      if (oper1 < 0) {
        return -Math.floor(-oper1 / oper2);
      }
      return Math.floor(oper1 / oper2);
    },
  };

  const temp = [];
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  const dfs = (L) => {
    if (L === n - 1) {
      let oper1 = nums[0];
      for (let i = 0; i < temp.length; i++) {
        let oper2 = nums[i + 1];
        let idx = temp[i];

        oper1 = operObj[idx](oper1, oper2);
      }
      if (oper1 > max) max = oper1;
      if (oper1 < min) min = oper1;
    }

    for (let i = 0; i < 4; i++) {
      if (!operators[i]) continue;
      operators[i] -= 1;
      temp.push(i);
      dfs(L + 1);
      operators[i] += 1;

      temp.pop();
    }
  };

  dfs(0);

  console.log(`${max}\n${min}`);
})();
