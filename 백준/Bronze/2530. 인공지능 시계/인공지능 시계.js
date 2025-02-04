(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");

  const [hour, minutes, seconds] = input[0].split(" ").map(Number);
  let d = Number(input[1]);

  let _hourToSec = 3600 * hour;
  let _minutesToSec = minutes * 60;
  let _secondsToSec = seconds;

  let totalSec = _hourToSec + _minutesToSec + _secondsToSec + d;

  let newHour = Math.floor(totalSec / 3600) % 24;
  let newMinutes = Math.floor((totalSec % 3600) / 60);
  let newSeconds = (totalSec % 3600) % 60;

  console.log(newHour, newMinutes, newSeconds);
})();
