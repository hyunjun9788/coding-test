function solution(board, moves) {
    const stack = []
    const newBoard = Array.from({length:board.length}, () => [])
    let answer = 0
    
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            newBoard[j].push(board[i][j])
        }
    }
    
    for(let i=0;i<moves.length;i++){
        const peekedLine = moves[i]
        
        const xLine = newBoard[peekedLine-1]
        
        for(let j=0;j<board.length;j++){
            const peek = xLine.shift()
            if(peek === 0 || peek === undefined){
            continue
            }
        if(stack[stack.length-1] !== peek){
            stack.push(peek)
            break
            
        }else{
            stack.pop()
            answer+=2
            break
            }
        }
    }
    return answer
}

