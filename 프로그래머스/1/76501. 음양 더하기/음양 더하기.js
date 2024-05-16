function solution(absolutes, signs) {
    let sum = 0 
    const updateAbs= absolutes.map((v,i)=>signs[i]===false?-absolutes[i]:absolutes[i])
    console.log(updateAbs)
    updateAbs.forEach((v)=>sum+=v)
    return sum
}