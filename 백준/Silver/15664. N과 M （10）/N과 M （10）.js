(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const arr = input[1].split(" ").map(Number);

  const check = Array.from({ length: n }, () => false);
  arr.sort((a, b) => a - b);

  const result = [];
  let answer = "";

  function recur(index) {
    if (result.length === m) {
      for (let i = 0; i < result.length; i++) {
        answer += result[i] + " ";
      }
      answer += "\n";
      return;
    }

    let prev = null;

    for (let i = index; i < arr.length; i++) {
      if (!check[i] && prev !== arr[i]) {
        result.push(arr[i]);
        check[i] = true;
        recur(i);
        result.pop();
        check[i] = false;
        prev = arr[i];
      }
    }
  }

  recur(0);
  console.log(answer);
})();
