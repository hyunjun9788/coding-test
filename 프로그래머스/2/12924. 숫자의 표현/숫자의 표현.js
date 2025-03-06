function solution(n) {
    // let start = 1
    // let result = 0
    // while(n>=start){
    //     let sum = 0
    //     for(let i=start;i<=n;i++){
    //         sum+=i
    //          if(sum === n){
    //             result+=1
    //             break
    //         }
    //     }
    //     start+=1
    // }
    // return result
    
  var answer = 0;

  for (var i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}