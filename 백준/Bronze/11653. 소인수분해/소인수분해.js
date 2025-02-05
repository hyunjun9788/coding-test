(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  let N = Number(input[0]);
  const result = [];
  let value = 2;

  while (N > 1) {
    if (N % value === 0) {
      N = N / value;
      result.push(value);
    } else {
      value += 1;
    }
  }

  console.log(result.join("\n"));
})();
