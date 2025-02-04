(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [A, I] = input[0].split(" ").map(Number);

  let melody = A * (I - 1) + 1;

  console.log(melody);
})();
