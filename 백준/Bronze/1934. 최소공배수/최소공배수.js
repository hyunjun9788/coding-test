(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const T = Number(input[0]);

  for (let i = 1; i < input.length; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    let min = 0;
    for (let i = 2; i <= A; i++) {
      if (A % i === 0 && B % i === 0) {
        min = i * (A / i) * (B / i);
      }
    }
    if (min === 0) {
      min = A * B;
    }
    console.log(min);
  }
})();
