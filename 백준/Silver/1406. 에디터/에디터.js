(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const left = input[0].split("");
  const right = [];

  for (let i = 2; i < input.length; i++) {
    const [key, value] = input[i].split(" ");

    if (key === "P") {
      left.push(value);
    }

    if (key === "L") {
      if (left.length > 0) {
        const pop = left.pop();
        right.push(pop);
      }
    }

    if (key === "B") {
      left.pop();
    }

    if (key === "D") {
      if (right.length > 0) {
        const pop = right.pop();
        left.push(pop);
      }
    }
  }

  console.log([...left, ...right.reverse()].join(""));
})();
