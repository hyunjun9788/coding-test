function solution(n) {
   let a = 0
   let b = 1
   let answer
   for(let i=2;i<=n;i++){
       answer = (a + b)%1234567
       a=b
       b=answer
   }
    return answer
}