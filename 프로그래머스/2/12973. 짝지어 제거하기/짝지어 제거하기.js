function solution(s)
{
    const stack = []
    const arr = s.split('')
    
    for(let i=0;i<s.length;i++){
        const peek = arr.pop()
    
        if(stack[stack.length-1] !== peek){
            stack.push(peek)
        }else{
            stack.pop()
        }
    }
    if(stack.length===0){
        return 1
    }else{
        return 0
    }
  
    
}