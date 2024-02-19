function solution(numbers) {
    var answer = [];
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            answer.push(numbers[i]*numbers[j])
        }
    }
    const sortedArr = answer.sort((a,b)=>b-a)
    return sortedArr[0]
}