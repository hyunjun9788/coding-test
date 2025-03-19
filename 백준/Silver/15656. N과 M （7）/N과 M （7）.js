(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const arr = input[1].split(" ").map(Number);

  arr.sort((a, b) => a - b);

  const result = [];
  let answer = "";

  function recur() {
    if (result.length === m) {
      for (let i = 0; i < result.length; i++) {
        answer += result[i] + " ";
      }
      answer += "\n";
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      recur(i + 1);
      result.pop();
    }
  }

  recur();
  console.log(answer);
})();
