function solution(N, stages) {
    let member = stages.length
    const arr= []
    for(let i=1;i<=N;i++){
        let noPass = 0
        for(let j=0;j<stages.length;j++){
            if(stages[j] === i){
                noPass++
            }
        }
        console.log(noPass)
        console.log('member',member)
         arr.push(noPass/member)
        member-=noPass
        
    }
    const result = []
    console.log(arr)
    for(const item of arr.entries()){
        result.push(item)
        
}
   result.sort((a,b)=>b[1]-a[1])
    console.log(result)
    
    const index = []
    for(let i=0;i<result.length;i++){
        index.push(result[i][0]+1)
    }
    return index
}