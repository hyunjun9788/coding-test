function solution(k, tangerine) {
    const obj = new Map()
    
    for(let i=0;i<tangerine.length;i++){
        obj.set(tangerine[i],(obj.get(tangerine[i])??0) + 1)
    }
    
    const tangerineArr =  ([...obj].sort((a,b)=>b[1]-a[1]))
    let sum = 0
    for(let i=0;i<tangerineArr.length;i++){
        sum += tangerineArr[i][1]
        if(sum>=k){
            return i+1
        }
    }
}