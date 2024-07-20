function solution(sizes) {
    let width = []
    let height = []
    const sortedArr =sizes.map((v)=>v.sort((a,b)=>a-b))
    sortedArr.forEach((v)=>width.push(v[0]))
    sortedArr.forEach((v)=>height.push(v[1]))
  return Math.max(...width)*Math.max(...height)
}