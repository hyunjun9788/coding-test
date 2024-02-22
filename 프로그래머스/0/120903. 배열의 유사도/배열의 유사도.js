function solution(s1, s2) {
   let result = 0
   
 s2.forEach((v)=>{if(s1.includes(v)){
       result++
   }})
    return result
}