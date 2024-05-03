function solution(s){
    let lowerS = s.toLowerCase()
    let p = 0
    let y=0
    for(let i=0;i<lowerS.length;i++){
        if(lowerS[i]==='p'){
            p++
        }
        else if(lowerS[i]==='y'){
            y++
        }
    }
    return p===y?true:false
}