function solution(s) {
    let answer = s;
    let numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    
    for(let i = 0; i < numbers.length; i++) {
        let newArr = answer.split(numbers[i]);
        console.log(newArr)
        answer = newArr.join(i)
        console.log(answer)
    }
    return Number(answer);
}