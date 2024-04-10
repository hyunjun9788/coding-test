function solution(keyinput, board) {
    var answer = [0,0];
    let width=(board[0]-1)/2
    let height=(board[1]-1)/2

    keyinput.forEach(v=>{
        switch(v){
            case 'up':{
                if(answer[1]!==height) answer[1]++
                break;
            }
            case 'down':{
                if(answer[1]!==-height) answer[1]--
                break
            }
            case 'left':{
                if(answer[0]!==-width) answer[0]--
                break;
            }
            case 'right':{
                if(answer[0]!==width) answer[0]++
                break;
            }
        }
    })
        return answer

}