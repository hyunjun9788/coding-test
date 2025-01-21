(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [N, H] = input[0].split(" ").map(Number);
  let 석순 = [];
  let 종유석 = [];


  for (let i = 1; i <= N; i++) {
    let height = Number(input[i]);
    if (i % 2 === 1) 석순.push(height);
    else 종유석.push(height); 
  }

  석순.sort((a, b) => a - b);
  종유석.sort((a, b) => a - b);

  const countObstacles = (height, arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= height) right = mid - 1;
      else left = mid + 1;
    }
    return arr.length - left; 
  };

  let minObstacles = N,
    count = 0;

  for (let h = 1; h <= H; h++) {
    let total = countObstacles(h, 석순) + countObstacles(H - h + 1, 종유석);

    if (total < minObstacles) {
      minObstacles = total;
      count = 1;
    } else if (total === minObstacles) {
      count++;
    }
  }

  console.log(minObstacles, count);
})();
