(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const arr = [];
  const chickens = [];
  const houses = [];
  const selected = [];

  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 2) {
        chickens.push([i, j]);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        houses.push([i, j]);
      }
    }
  }

  let ans = 20000;

  function recur(index) {
    if (selected.length === m) {
      let cityDist = 0;
      for (let i = 0; i < houses.length; i++) {
        let minDist = 100;
        for (let j = 0; j < selected.length; j++) {
          const nowDist =
            Math.abs(houses[i][0] - selected[j][0]) + Math.abs(houses[i][1] - selected[j][1]);

          minDist = Math.min(minDist, nowDist);
        }
        cityDist += minDist;
      }
      ans = Math.min(ans, cityDist);
      return;
    }

    if (index >= chickens.length) {
      return;
    }

    selected.push(chickens[index]);
    recur(index + 1);
    selected.pop();
    recur(index + 1);
  }

  recur(0);

  console.log(ans);
})();
