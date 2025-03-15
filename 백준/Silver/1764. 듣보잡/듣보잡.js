(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const noHear = new Set();
  const result = [];

  for (let i = 1; i <= n; i++) {
    noHear.add(input[i]);
  }

  for (let i = n + 1; i < input.length; i++) {
    if (noHear.has(input[i])) {
      result.push(input[i]);
    }
  }

  console.log(result.length);
  console.log(result.sort().join("\n"));
})();
