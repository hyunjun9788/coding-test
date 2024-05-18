function solution(arr, divisor) {
    var answer = [];
    arr.forEach((v)=>v%divisor===0&&answer.push(v))
    if(answer.length===0){
        answer.push(-1)
    }
    return answer.sort((a,b)=>a-b)
}