(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [r, c, n] = input[0].split(" ").map(Number);

  let graph = input.slice(1).map((line) => line.split(""));

  const explode = (grid) => {
    const newGrid = Array.from({ length: r }, () => Array(c).fill("O"));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let y = 0; y < r; y++) {
      for (let x = 0; x < c; x++) {
        if (grid[y][x] === "O") {
          newGrid[y][x] = ".";
          for (let d = 0; d < 4; d++) {
            let ny = y + dy[d];
            let nx = x + dx[d];
            if (ny < r && ny >= 0 && nx < c && nx >= 0) {
              newGrid[ny][nx] = ".";
            }
          }
        }
      }
    }
    return newGrid;
  };

  if (n === 1) {
    console.log(graph.map((row) => row.join("")).join("\n"));
    return;
  }

  if (n % 2 === 0) {
    console.log(Array(r).fill("O".repeat(c)).join("\n"));
    return;
  }

  let state3 = explode(graph);
  let state5 = explode(state3);

  console.log((n % 4 === 3 ? state3 : state5).map((row) => row.join("")).join("\n"));
})();
