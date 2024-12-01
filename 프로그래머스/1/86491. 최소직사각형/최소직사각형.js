function solution(sizes) {
    const sortedSizes = sizes.map((size,i)=>size.sort((a,b)=>b-a))
    
    const width = []
    const height = []
    for(let i=0;i<sortedSizes.length;i++){
        width.push(sortedSizes[i][0])
        height.push(sortedSizes[i][1])
        
    }
    
    return Math.max(...width) * Math.max(...height)
}