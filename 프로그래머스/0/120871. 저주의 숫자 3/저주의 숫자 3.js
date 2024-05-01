function solution(n) {
    let count =1;
    
    for(let i=1; i<=n; i++){
        while(count%3===0 || count.toString().includes("3")){
            count++
        }
        count++
    }
    return count -1 
}