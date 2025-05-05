(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const N = Number(input[0]);
  const tasks = [];

  let maxDay = 0;

  for (let i = 1; i <= N; i++) {
    const [d, w] = input[i].split(" ").map(Number);
    tasks.push({ d, w });
    maxDay = Math.max(maxDay, d);
  }

  tasks.sort((a, b) => b.d - a.d);

  let result = 0;
  let idx = 0;

  const queue = [];

  for (let day = maxDay; day >= 1; day--) {
    while (idx < N && tasks[idx].d >= day) {
      queue.push(tasks[idx].w);
      idx++;
    }
    queue.sort((a, b) => b - a);

    if (queue.length > 0) {
      result += queue.shift();
    }
  }
  console.log(result);
})();
