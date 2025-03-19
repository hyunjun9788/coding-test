(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const arr = input[1].split(" ").map(Number);
  const check = Array.from({ length: n }, () => false);

  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length; i++) {}

  function recur() {
    if (result.length === m) {
      console.log(...result);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!check[i]) {
        result.push(arr[i]);
        check[i] = true;
        recur(i + 1);
        result.pop();
        check[i] = false;
      }
    }
  }

  recur();
})();
