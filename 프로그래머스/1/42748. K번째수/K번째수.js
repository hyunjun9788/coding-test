function solution(array, commands) {
    let arr = []
    for(let i=0;i<commands.length;i++){
        let answer = [...array];
        arr.push(answer.splice(commands[i][0]-1,commands[i][1]-commands[i][0]+1).sort((a,b)=>a-b)[commands[i][2]-1])
    }
    return arr
}