(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const arr = input[0];

  const stack = [];
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(i);
    } else {
      if (stack[stack.length - 1] === i - 1) {
        stack.pop();
        result += stack.length;
      } else {
        stack.pop();
        result += 1;
      }
    }
  }

  console.log(result);
})();
