(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  for (let i = 0; i < input.length; i++) {
    const stack = [];
    const str = input[i].split("");
    if (str[0] === ".") break;
    let isBalanced = true;

    for (let j = 0; j < str.length; j++) {
      if (str[j] === "(" || str[j] === "[") {
        stack.push(str[j]);
      }
      if (str[j] === "]") {
        if (stack.length === 0 || stack.pop() !== "[") {
          isBalanced = false;
          break;
        }
      }
      if (str[j] === ")") {
        if (stack.length === 0 || stack.pop() !== "(") {
          isBalanced = false;
          break;
        }
      }
    }
    console.log(isBalanced && stack.length === 0 ? "yes" : "no");
  }
})();
