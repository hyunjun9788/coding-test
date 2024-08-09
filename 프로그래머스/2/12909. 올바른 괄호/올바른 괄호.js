function solution(s){
    let arr = s.split('')
    let count = 0
    if(arr[0]===")"|| arr[arr.length-1]==="("){
            return false
        }
    for(let i=0;i<arr.length;i++){
        arr[i]==="("? count+=1 : count-=1
        if(count<0){
            return false
        }
    }
            return !count?true:false
    }