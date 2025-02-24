function solution(arr)
{
    const stack = []
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] === stack[stack.length-1]){
            continue
        }else{
            stack.push(arr[i])
        }
    }
    
    return stack
}