(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const N = Number(input[0]);

  const origin = input[1].split(" ").map(Number);
  const waitingStack = [];
  let current = 1;

  for (let i = 0; i < N; i++) {
    const member = origin[i];

    if (current === member) {
      current++;
    } else {
      waitingStack.push(member);
    }

    while (waitingStack.length > 0 && waitingStack[waitingStack.length - 1] === current) {
      waitingStack.pop();
      current++;
    }
  }

  console.log(waitingStack.length === 0 ? "Nice" : "Sad");
})();
