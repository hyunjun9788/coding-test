(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "t.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const s = input[0].split("");
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const sliceS = s.slice(i, s.length);
    result.push(sliceS.join(""));
  }

  console.log(result.sort().join("\n"));
})();
