function solution(elements) {
    const result = []
    const set = new Set();
    
    for(let i=1;i<=elements.length;i++){
        for(let j=0;j<elements.length;j++){
            let sum = 0
            for(let k=0;k<i;k++){
                sum += elements[(k+j) % elements.length]
            }
            set.add(sum)
        }
    }
    return set.size
}