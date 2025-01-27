(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [N, K] = input[0].split(" ").map(Number);

  const queue = Array.from({ length: N }, (_, i) => i + 1);
  const result = [];

  let index = 0;

  while (queue.length > 0) {
    index = (index + K - 1) % queue.length;
    result.push(...queue.splice(index, 1));
  }

  console.log(`<${result.join(", ")}>`);
})();
