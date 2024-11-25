function solution(s){
    const stack = []
    
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            stack.push('(')
        }else if(s[i] === ')'){
            if(stack.length ===0){
                return false
            }else{
                stack.pop()
            }
        }
    }
    return stack.length === 0
}