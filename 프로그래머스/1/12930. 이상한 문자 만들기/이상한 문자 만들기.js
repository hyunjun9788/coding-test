function solution(s) {
    const split = s.split(' ')
    console.log(split)
    for(let i=0;i<split.length;i++){
        let result = ''
        for(let j=0;j<split[i].length;j++){
            if(j%2===0){
                result+=split[i][j].toUpperCase()
            }else{
                result+=split[i][j].toLowerCase()
            }
        }
          split[i] = result;
    }
   return split.join(' ');
}