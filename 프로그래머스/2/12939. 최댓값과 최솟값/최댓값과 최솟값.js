function solution(s) {
    let str = ""
    let arr = s.split(' ').sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        if(i===0){
            str+=arr[0]
        }
        if(i===arr.length-1){
            str+=" "+arr[arr.length-1]
        }
    }
        return str
}