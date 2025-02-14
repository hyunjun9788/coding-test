(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const N = Number(input[0]);

  const queue = [];

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  let front = 0;
  while (queue.length - front > 1) {
    front++;
    queue.push(queue[front]);
    front++;
  }
  console.log(queue[front]);
})();
