(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const parentheses = input[0];

  const stack = [];
  let answer = 0;

  for (let i = 0; i < parentheses.length; i++) {
    if (parentheses[i] === "(") {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        if (stack[stack.length - 1] === i - 1) {
          stack.pop();
          answer += stack.length;
        } else {
          stack.pop();
          answer += 1;
        }
      }
    }
  }
  console.log(answer);
})();
