function solution(food) {
    var answer = '';
    let count = []
    for(let i=1; i<food.length;i++){
        count.push(Math.floor(food[i]/2))
      
            for(let j=0;j<count[i-1];j++){
                answer+=i
            }
    }
    let reversedArr = answer.split('').reverse().join('')

    return answer+0+reversedArr.toString()
}