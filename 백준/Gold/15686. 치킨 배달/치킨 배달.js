(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const home = [];
  const chickens = [];
  const allCity = [];

  for (let i = 1; i <= n; i++) {
    allCity.push(input[i].split(" ").map(Number));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (allCity[i][j] === 1) {
        home.push([i, j]);
      }
      if (allCity[i][j] === 2) {
        chickens.push([i, j]);
      }
    }
  }

  const selectedChickens = [];
  let answer = 9999;
  function recur(index) {
    if (selectedChickens.length === m) {
      let allMinDist = 0;
      for (let i = 0; i < home.length; i++) {
        let minDist = 9999;
        for (let j = 0; j < selectedChickens.length; j++) {
          const dist =
            Math.abs(home[i][0] - selectedChickens[j][0]) +
            Math.abs(home[i][1] - selectedChickens[j][1]);
          minDist = Math.min(dist, minDist);
        }
        allMinDist += minDist;
      }
      answer = Math.min(allMinDist, answer);
      return;
    }

    if (index >= chickens.length) {
      return;
    }

    selectedChickens.push(chickens[index]);
    recur(index + 1);
    selectedChickens.pop();
    recur(index + 1);
  }

  recur(0);
  console.log(answer);
})();
