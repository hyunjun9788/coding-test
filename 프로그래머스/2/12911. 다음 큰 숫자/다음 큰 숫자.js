function solution(n) {
    let num = n
    let twoNumber = n.toString(2)
    let oneCount = 0
   
    for(let i=0;i<twoNumber.length;i++){
        if(twoNumber[i]==='1'){
            oneCount++
        }
    }
    
   while(true){
    num++
    let otherOneCount = 0
       let numTwoNumber= (num).toString(2)
       for(let i of numTwoNumber){
            if(i==='1'){
                otherOneCount++
        }
       }
       if(oneCount===otherOneCount){
           return num
       }
}
}
    
    
      