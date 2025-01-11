(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const position = input[1].split(" ").map(Number);
  let answer = 0;
  const pos = [];
  const neg = [];

  for (let i = 0; i < position.length; i++) {
    if (position[i] < 0) {
      neg.push(-position[i]);
    } else {
      pos.push(position[i]);
    }
  }

  pos.sort((a, b) => b - a);
  neg.sort((a, b) => b - a);

  const dist = [];

  for (let i = 0; i < pos.length; i += m) {
    dist.push(pos[i]);
  }
  for (let i = 0; i < neg.length; i += m) {
    dist.push(neg[i]);
  }

  for (let i = 0; i < dist.length; i++) {
    answer += dist[i] * 2;
  }
  console.log(answer - Math.max(...dist));
})();
