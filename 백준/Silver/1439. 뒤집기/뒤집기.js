(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const s = input[0].split("").map(Number);

  let sum = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      sum += 1;
    }
  }

  console.log(Math.ceil(sum / 2));
})();
