(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const result = n * m - 1
  console.log(result);
})();
