function solution(x, n) {
    let arr = []
    let start = x
    
    for(let i=0;i<n;i++){
        arr.push(start)
        start+=x
        
    }
    return arr
}