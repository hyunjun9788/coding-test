(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [x, y, w, h] = input[0].split(" ").map(Number);

  let min = Math.min(x - 0, y - 0, w - x, h - y);

  console.log(min);
})();
