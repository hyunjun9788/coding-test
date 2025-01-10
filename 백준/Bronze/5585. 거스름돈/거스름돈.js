(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  let cost = Number(input[0]);
  let payment = 1000;

  const change = payment - cost;

  let count = 0;
  let remain = change;

  while (remain > 0) {
    if (change >= 500) {
      count += Math.floor(remain / 500);
      remain = remain % 500;
    }
    if (remain >= 100 && remain < 500) {
      count += Math.floor(remain / 100);
      remain = remain % 100;
    }
    if (remain >= 50 && remain < 100) {
      count += Math.floor(remain / 50);
      remain = remain % 50;
    }
    if (remain >= 10 && remain < 50) {
      count += Math.floor(remain / 10);
      remain = remain % 10;
    }
    if (remain >= 5 && remain < 10) {
      count += Math.floor(remain / 5);
      remain = remain % 5;
    }
    if (remain >= 1 && remain < 5) {
      count += Math.floor(remain / 1);
      remain = remain % 1;
    }
    break;
  }
  console.log(count);
})();
