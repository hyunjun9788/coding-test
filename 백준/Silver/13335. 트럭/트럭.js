(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, w, l] = input[0].split(" ").map(Number);
  const trucks = input[1].split(" ").map(Number);
  const bridge = Array(w).fill(0);
  let time = 0;
  let bridgeWeight = 0;

  while (trucks.length > 0 || bridgeWeight > 0) {
    bridgeWeight -= bridge.shift();

    if (trucks.length > 0 && bridgeWeight + trucks[0] <= l) {
      let nextTruck = trucks.shift();
      bridge.push(nextTruck);
      bridgeWeight += nextTruck;
    } else {
      bridge.push(0);
    }
    time++;
  }

  console.log(time);
})();
