function solution(array, height) {
    let sortedArr = [...array,height].sort((a,b)=>b-a)
    
    let num =0

     // sortedArr.map((v)=>v>height?num++:num+=0)
    for(let i=0;i<sortedArr.length;i++){
        if(sortedArr[i]>height){
            num++
        }
    }
        return num
}