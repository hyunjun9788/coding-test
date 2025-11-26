function solution(numbers) {
    const answer = []
    
    for(let i=0;i<numbers.length-1;i++){
        for(let j=0;j<numbers.length;j++){
            if(i===j){
                continue
            }
            const sum = numbers[i] + numbers[j]
            if(!answer.includes(sum)){
            answer.push(sum)
            }
        }
    }
    
    return answer.sort((a,b) => a-b)
}