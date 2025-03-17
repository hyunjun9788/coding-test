(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const arr = [];
  const result = [];
  let flag = false;

  for (let i = 0; i < 9; i++) {
    arr.push(Number(input[i]));
  }

  arr.sort((a, b) => a - b);

  function recur(index) {
    if (index >= 9) {
      if (result.length === 7) {
        let sum = 0;
        for (let i = 0; i < result.length; i++) {
          sum += result[i];
        }

        if (sum === 100) {
          flag = true;
          console.log(result.join("\n"));
          return;
        }
      }
      return;
    }

    result.push(arr[index]);
    recur(index + 1);
    if (flag) {
      return;
    }
    result.pop();
    recur(index + 1);
    if (flag) {
      return;
    }
  }

  recur(0);
})();
