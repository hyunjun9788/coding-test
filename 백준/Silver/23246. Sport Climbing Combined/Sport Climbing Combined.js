(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const n = Number(input[0]);
  const ranking = [];
  let result = "";
  for (let i = 1; i < input.length; i++) {
    const [b, p, q, r] = input[i].split(" ").map(Number);
    ranking.push([b, p, q, r]);
  }

  ranking.sort((a, b) => {
    if (a[1] * a[2] * a[3] !== b[1] * b[2] * b[3]) {
      return a[1] * a[2] * a[3] - b[1] * b[2] * b[3];
    }
    if (a[1] + a[2] + a[3] !== b[1] + b[2] + b[3]) {
      return a[1] + a[2] + a[3] - (b[1] + b[2] + b[3]);
    }
    return a[0] - b[0];
  });

  for (let i = 0; i < 3; i++) {
    result += ranking[i][0] + " ";
  }
  console.log(result);
})();
