(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [n, m] = input[0].split(" ").map(Number);
  const office = [];
  const cameras = [];

  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  const dir = Array.from({ length: 6 }, () => []);

  dir[1] = [0];
  dir[2] = [0, 2];
  dir[3] = [0, 1];
  dir[4] = [0, 1, 2];
  dir[5] = [0, 1, 2, 3];

  for (let i = 1; i <= n; i++) {
    office.push(input[i].split(" ").map(Number));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (office[i][j] !== 0 && office[i][j] !== 6) {
        cameras.push([i, j]);
      }
    }
  }

  let answer = 64;

  function recur(index) {
    if (index === cameras.length) {
      let cnt = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (office[i][j] === 0) {
            cnt += 1;
          }
        }
      }

      answer = Math.min(cnt, answer);
      return;
    }

    const cameraType = office[cameras[index][0]][cameras[index][1]];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < dir[cameraType].length; j++) {
        let nx = cameras[index][0] + dx[Math.floor((dir[cameraType][j] + i) % 4)];
        let ny = cameras[index][1] + dy[Math.floor((dir[cameraType][j] + i) % 4)];

        while (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (office[nx][ny] === 6) break;
          if (office[nx][ny] <= 0) {
            office[nx][ny] -= 1;
          }

          nx += dx[Math.floor((dir[cameraType][j] + i) % 4)];
          ny += dy[Math.floor((dir[cameraType][j] + i) % 4)];
        }
      }

      recur(index + 1);

      for (let j = 0; j < dir[cameraType].length; j++) {
        let nx = cameras[index][0] + dx[Math.floor((dir[cameraType][j] + i) % 4)];
        let ny = cameras[index][1] + dy[Math.floor((dir[cameraType][j] + i) % 4)];

        while (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (office[nx][ny] === 6) break;

          if (office[nx][ny] <= 0) {
            office[nx][ny] += 1;
          }

          nx += dx[Math.floor((dir[cameraType][j] + i) % 4)];
          ny += dy[Math.floor((dir[cameraType][j] + i) % 4)];
        }
      }
    }
  }

  recur(0);
  console.log(answer);
})();
