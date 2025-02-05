(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [a, b, c] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  console.log(b);
})();
