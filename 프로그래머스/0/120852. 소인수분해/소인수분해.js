function solution(n) {
    let arr = []
     let divisor = 2
    while(n>=2){
        if(n%divisor===0){
            arr.push(divisor)
            n=n/divisor
        }
        else divisor++
    }
return [...new Set(arr)];
}