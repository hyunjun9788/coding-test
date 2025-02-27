function solution(clothes) {
   const clothesMap = new Map()
   
   for(let [cloth,category] of clothes){
       clothesMap.set(category,(clothesMap.get(category) || 0 ) + 1)
   }
    
    let answer = 1
    
    for(let count of clothesMap.values()){
        answer *= (count+1)
    }
    return answer - 1
}