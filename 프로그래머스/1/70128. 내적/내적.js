function solution(a, b) {
    let sum = 0
    a.forEach((_,i)=>sum+=(a[i]*b[i]))
    return sum
}