(function main() {
  let isLocal =false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");
  let answer = 0;

  const check = Array.from({ length: 10000 }, () => false);
  const result = [];

  for (let i = 1; i < 10000; i++) {
    const num = i.toString();

    let perSum = 0;
    for (let j = 0; j < num.length; j++) {
      perSum += Number(num[j]);
    }

    const allSum = Number(num) + perSum;
    check[allSum] = true;
  }

  for (let i = 1; i < 10000; i++) {
    if (!check[i]) {
      result.push(i);
    }
  }

  console.log(result.join("\n"));
})();
