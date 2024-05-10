function solution(arr) {
    let avg = 0
    arr.forEach((v)=>avg+=v/arr.length)
    return avg
}