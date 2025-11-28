function solution(s) {
    const arr = s.split('')
    let answer = 0
    
    for(let i=0;i<arr.length;i++){
      let stack = []
        for(let j=0;j<arr.length;j++){
            if(arr[j] === '['){
                stack.push('[')
                continue
            }else if(arr[j] ===']'){
                if(stack[stack.length-1] === '['){
                    stack.pop()
                    continue
                }
                    stack.push(']')
            }
            else if(arr[j] ==='('){
                stack.push('(')
                continue
            }else if(arr[j] === ')'){
                if(stack[stack.length-1] === '('){
                    stack.pop()
                    continue
                }
                    stack.push(')')
            }else if(arr[j] === '{'){
                    stack.push('{')
                    continue
            }else if(arr[j] === '}'){
                if(stack[stack.length-1] === '{'){
                    stack.pop()
                    continue
                }
                    stack.push('{')
            }
        }
        if(stack.length === 0){
            answer += 1
        }
       const top = arr.shift()
        arr.push(top)
        
    }
    return answer
}





