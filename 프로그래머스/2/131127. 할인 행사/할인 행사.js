function solution(want, number, discount) {
    const wantObj = {}
    let result = 0
    for(let i=0;i<want.length;i++){
        wantObj[want[i]] = number[i]
    }
    let k =0
    while(k<=discount.length -10){
       
    let pass = true
    const disCountObj = {}
    
        for(let i=k;i<k+10;i++){
            if(!disCountObj[discount[i]]){
                disCountObj[discount[i]] =1
            }else{
                disCountObj[discount[i]] +=1
            }
        }
        
        for(let key in disCountObj){
            if(disCountObj[key]!==wantObj[key] || !wantObj[key]){
                pass = false
                break
            }
        }
        if(pass){
            result ++
        }
        k++
        
    }
    return result
}
