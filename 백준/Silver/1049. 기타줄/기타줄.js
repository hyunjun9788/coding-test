(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  let minPackage = Infinity;
  let minSingle = Infinity;

  for (let i = 1; i <= m; i++) {
    const [package, single] = input[i].split(" ").map(Number);

    minPackage = Math.min(minPackage, package);
    minSingle = Math.min(minSingle, single);
  }

  const total1 = Math.ceil(n / 6) * minPackage;
  const total2 = n * minSingle;
  const total3 = Math.floor(n / 6) * minPackage + (n % 6) * minSingle;

  console.log(Math.min(total1, total2, total3));
})();
