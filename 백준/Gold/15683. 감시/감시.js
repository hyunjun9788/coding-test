(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input.shift().split(" ").map(Number);
  const map = input.map((v) => v.split(" ").map(Number));
  const cameras = [];
  const CHECK_VALUE = 10;
  let answer = Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] !== 0 && map[i][j] !== 6) {
        cameras.push([i, j, map[i][j]]);
      }
    }
  }

  function camOn(x, y, dir, map, isCheck) {
    const direction = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (const myDir of dir) {
      let [nextX, nextY] = [x + direction[myDir][0], y + direction[myDir][1]];

      while (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && map[nextX][nextY] !== 6) {
        map[nextX][nextY] += isCheck;
        [nextX, nextY] = [nextX + direction[myDir][0], nextY + direction[myDir][1]];
      }
    }
  }

  function findAnswer(map) {
    let result = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] === 0) {
          result++;
        }
      }
    }
    return result;
  }

  function combination(cams, index, map) {
    if (index === cams.length) {
      const result = findAnswer(map);
      answer = Math.min(result, answer);
      return;
    }

    const [x, y, type] = cams[index];

    if (type === 1) {
      camOn(x, y, [2], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [2], map, -CHECK_VALUE);

      camOn(x, y, [3], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [3], map, -CHECK_VALUE);

      camOn(x, y, [0], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [0], map, -CHECK_VALUE);

      camOn(x, y, [1], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [1], map, -CHECK_VALUE);
    } else if (type === 2) {
      camOn(x, y, [2, 3], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [2, 3], map, -CHECK_VALUE);

      camOn(x, y, [0, 1], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [0, 1], map, -CHECK_VALUE);
    } else if (type === 3) {
      camOn(x, y, [0, 3], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [0, 3], map, -CHECK_VALUE);

      camOn(x, y, [1, 3], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [1, 3], map, -CHECK_VALUE);

      camOn(x, y, [1, 2], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [1, 2], map, -CHECK_VALUE);

      camOn(x, y, [0, 2], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [0, 2], map, -CHECK_VALUE);
    } else if (type === 4) {
      camOn(x, y, [0, 1, 3], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [0, 1, 3], map, -CHECK_VALUE);

      camOn(x, y, [1, 2, 3], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [1, 2, 3], map, -CHECK_VALUE);

      camOn(x, y, [0, 1, 2], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [0, 1, 2], map, -CHECK_VALUE);

      camOn(x, y, [0, 2, 3], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [0, 2, 3], map, -CHECK_VALUE);
    } else {
      camOn(x, y, [0, 1, 2, 3], map, CHECK_VALUE);
      combination(cams, index + 1, map);
      camOn(x, y, [0, 1, 2, 3], map, -CHECK_VALUE);
    }
  }
  combination(cameras, 0, map);
  console.log(answer);
})();
