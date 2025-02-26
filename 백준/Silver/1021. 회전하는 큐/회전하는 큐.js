(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [N, M] = input[0].split(" ").map(Number);
  const locations = input[1].split(" ").map(Number);
  let count = 0;
  const queue = Array.from({ length: N }, (_, i) => i + 1);

  for (let i = 0; i < M; i++) {
    const location = locations[i];
    while (true) {
      if (location === queue[0]) {
        queue.shift();
        break;
      }

      if (queue[0] !== location && queue.indexOf(location) <= Math.floor(queue.length / 2)) {
        const frontShift = queue.shift();
        queue.push(frontShift);
        count++;
      } else if (queue[0] !== location && queue.indexOf(location) > Math.floor(queue.length / 2)) {
        const popBack = queue.pop();
        queue.unshift(popBack);
        count++;
      }
    }
  }
  console.log(count);
})();
