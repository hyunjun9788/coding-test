function solution(n, m) {
    let min = 1;
    for (let i=1; i<=n*m; i++) {
        if ((i % n === 0) && (i % m === 0)) {
            min = i;
           break;
       }
    }
   return [n*m/min, min];
}