function solution(answers) {
    const memberStyle = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    
    const rightArr = []
  for (let i = 0; i < memberStyle.length; i++) {
        let right = 0;
        for (let j = 0; j < answers.length; j++) {
            if (memberStyle[i][j % memberStyle[i].length] === answers[j]) {
                right++;
            }
        }
        rightArr.push(right);
    }
    let maxValue = Math.max(...rightArr)
    const result = []
    for(let i=0;i<rightArr.length;i++){
        if(rightArr[i]>=maxValue){
            result.push(i+1)
        }
  
    }

    return result
    
}