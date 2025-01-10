(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const coins = [500, 100, 50, 10, 5, 1];
  let cnt = 0;
  let money = 1000 - Number(input[0]);
  for (let coin of coins) {
    cnt += Math.floor(money / coin);
    money = money % coin;
  }

  console.log(cnt);
})();
