(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  let T = Number(input[0]);
  let line = 1;
  const result = [];
  while (T > 0) {
    let count = 0;

    const [N, M] = input[line].split(" ").map(Number);
    const A = input[line + 1].split(" ").map(Number);
    const B = input[line + 2].split(" ").map(Number);

    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    for (let i = 0; i < A.length; i++) {
      let left = 0;
      let right = B.length;

      while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (A[i] > B[mid]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      count += left;
    }
    result.push(count);
    line += 3;
    T--;
  }
  console.log(result.join("\n"));
})();
