function solution(progresses, speeds) {
  const days = progresses.map((p, i) =>
    Math.ceil((100 - p) / speeds[i])
  );
console.log(days)
  const result = [];

  let 기준 = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    // 같이 배포 가능
    if (days[i] <= 기준) {
      count++;
    }
    // 새 배포
    else {
      result.push(count);
      기준 = days[i];
      count = 1;
    }
  }

  result.push(count);

  return result;
}
