(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  let N = Number(input[0]);

  if ((N % 4 === 0 && N % 100 !== 0) || N % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
})();
