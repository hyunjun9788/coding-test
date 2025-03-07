function solution(brown, yellow) {
    const all = brown + yellow
    
    for(let i=3;i<brown;i++){
        for(let j=i;j>=3;j--){
            if(all === i*j && (i-2)*(j-2) === yellow){
                return [i, j]
            }
        }
    }
}