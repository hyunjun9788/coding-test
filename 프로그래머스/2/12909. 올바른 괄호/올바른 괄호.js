function solution(s){
    const arr = s.split('')
    const stack = []
    
    for(let i =0;i<arr.length;i++){
        if(arr[i] === '('){
            stack.push(arr[i])
        }
        else if(arr[i] ===')'){
            if(stack[stack.length-1] === '('){
                stack.pop()
                continue
            }
        }
    }
    if(stack.length === 0 && arr[0] !== ')'){
        return true
    }
    else if(stack.length>0 || arr[0] === ')'){
        return false
    }
    
}