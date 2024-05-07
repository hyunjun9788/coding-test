function solution(n) {
    let nArr = n.toString().split('').reverse()
    return nArr.map((v)=>Number(v))
}