(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  let height = 10;
  const plate = input[0].split("");

  for (let i = 1; i <= plate.length - 1; i++) {
    if (plate[i] !== plate[i - 1]) {
      height += 10;
    }

    if (plate[i] === plate[i - 1]) {
      height += 5;
    }
  }
  console.log(height);
})();
