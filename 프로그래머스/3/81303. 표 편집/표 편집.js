function solution(n, k, cmd) {
  const prev = Array(n).fill(null);
  const next = Array(n).fill(null);
  const removed = [];

  // 연결 리스트 초기화
  for (let i = 0; i < n; i++) {
    prev[i] = i - 1;
    next[i] = i + 1;
  }
  next[n - 1] = null;

  let cur = k;

  for (const command of cmd) {
    const [type, value] = command.split(" ");

    if (type === "U") {
      for (let i = 0; i < value; i++) {
        cur = prev[cur];
      }
    }

    else if (type === "D") {
      for (let i = 0; i < value; i++) {
        cur = next[cur];
      }
    }

    else if (type === "C") {
      removed.push([cur, prev[cur], next[cur]]);

      if (prev[cur] !== null) next[prev[cur]] = next[cur];
      if (next[cur] !== null) prev[next[cur]] = prev[cur];

      cur = next[cur] !== null ? next[cur] : prev[cur];
    }

    else if (type === "Z") {
      const [restore, p, n] = removed.pop();

      if (p !== null) next[p] = restore;
      if (n !== null) prev[n] = restore;

      prev[restore] = p;
      next[restore] = n;
    }
  }

  const answer = Array(n).fill("O");

  for (const [index] of removed) {
    answer[index] = "X";
  }

  return answer.join("");
}
