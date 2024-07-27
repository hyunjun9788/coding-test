function solution(t, p) {
    let count = 0
    for(let i=0; i<=t.length-p.length;i++){
            const slicedNum = t.slice(i,i+p.length)
            if(slicedNum <= p) count++
    }
    return count
}