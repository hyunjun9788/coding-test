(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const arr = [];
  const result = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let output = "";

  function recur() {
    if (result.length === m) {
      output += result.join(" ") + "\n";
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      recur();
      result.pop();
    }
  }
  recur();

  console.log(output);
})();
