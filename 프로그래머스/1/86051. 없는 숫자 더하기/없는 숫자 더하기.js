function solution(numbers) {
    let arr = [1,2,3,4,5,6,7,8,9,0]
    let exclude = []
    let result = 0
    arr.forEach((v,i)=>!numbers.includes(v)&&exclude.push(v))
    exclude.forEach((v)=>result+=v)
    return result
}