(function main() {
  let isLocal = false;
  let fs = require("fs");
  let filePath = isLocal ? "test.txt" : "/dev/stdin";
  let input = fs.readFileSync(filePath).toString().trim().split("\n");

  const S = input[0];

  function isLucky(perm) {
    for (let i = 0; i < perm.length - 1; i++) {
      if (perm[i] === perm[i + 1]) {
        return false;
      }
    }
    return true;
  }

  function countLuckyString(S) {
    const charCounts = {};
    for (const char of S) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }

    const uniqueChars = Object.keys(charCounts);
    const totalLength = S.length;
    let count = 0;
    function backtrack(path) {
      if (path.length === totalLength) {
        if (isLucky(path)) count++;
        return;
      }

      for (const char of uniqueChars) {
        if (charCounts[char] > 0) {
          charCounts[char]--;

          backtrack(path + char);
          charCounts[char]++;
        }
      }
    }

    backtrack("");
    return count;
  }

  console.log(countLuckyString(S));
})();
