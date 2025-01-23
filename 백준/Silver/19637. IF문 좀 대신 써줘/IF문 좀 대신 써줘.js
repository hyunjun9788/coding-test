(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);

  const arr = [];
  const strength = [];
  const name = [];

  for (let i = n + 1; i < input.length; i++) {
    arr.push(Number(input[i]));
  }

  for (let i = 1; i <= n; i++) {
    const [title, value] = input[i].trim().split(" ");
    strength.push(value);
    name.push(title);
  }

  function lower(value) {
    let left = 0;
    let right = n - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (value <= strength[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return name[left];
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(lower(arr[i]));
  }
  console.log(result.join("\n"));
})();
