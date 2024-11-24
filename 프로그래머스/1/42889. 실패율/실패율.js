function solution(N, stages) {
    const failPercent = []
    for(let i=1;i<=N;i++){
        let cnt = 0
        let totalUser = 0
        for(let j=0;j<stages.length;j++){
            if(i===stages[j]){
                cnt++
            }
            if(stages[j]>=i){
                totalUser++
            }
        }
        
        failPercent.push(cnt/totalUser)
    }
    
    const result = failPercent.map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value)
    .map(item => item.index+1);   
    return result
}