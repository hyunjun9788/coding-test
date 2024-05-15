function solution(seoul) {
    let result = ''
    seoul.forEach((v,i)=>seoul[i]==="Kim"?result+=`김서방은 ${i}에 있다`:null)
    return result
}