(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [N, M] = input[0].split(" ").map(Number);

  const cost = Array(N + 1);
  const weight = Array(M + 1);
  const parkingStatus = Array(N + 1).fill(0);
  const waitingList = [];
  let result = 0;

  for (let i = 1; i <= N; i++) {
    cost[i] = Number(input[i]);
  }

  for (let i = 1; i <= M; i++) {
    weight[i] = Number(input[N + i]);
  }

  for (let i = N + M + 1; i < input.length; i++) {
    const car = Number(input[i]);

    if (car > 0) {
      let parked = false;

      for (let j = 1; j <= N; j++) {
        if (parkingStatus[j] === 0) {
          parkingStatus[j] = car;
          result += cost[j] * weight[car];
          parked = true;
          break;
        }
      }
      if (!parked) {
        waitingList.push(car);
      }
    } else {
      const parkedIdx = parkingStatus.indexOf(Math.abs(car));
      if (parkedIdx !== -1) {
        parkingStatus[parkedIdx] = 0; //차 빠짐 표시

        if (waitingList.length > 0) {
          const waitingCar = waitingList.shift();
          parkingStatus[parkedIdx] = waitingCar;
          result += cost[parkedIdx] * weight[waitingCar];
        }
      }
    }
  }
  console.log(result);
})();
