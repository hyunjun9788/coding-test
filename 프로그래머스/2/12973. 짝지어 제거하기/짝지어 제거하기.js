function solution(s)
{
    const stack = []
    
    for(let i=0;i<=s.length;i++){

        const top = stack[stack.length-1]
        if(s[i] === top){
            stack.pop()
        }else{
            stack.push(s[i])
        }
        
    }
    if(!stack.length){
        return 1
    }else{
        return 0
    }
}