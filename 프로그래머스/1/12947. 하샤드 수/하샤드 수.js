function solution(x) {
    let xStr = x.toString().split('')
    let sum = 0
    
    xStr.forEach((v)=>sum+=Number(v))
    return x%sum===0
}