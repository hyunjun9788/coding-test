function solution(progresses, speeds) {
    const workDay = []
    for(let i=0;i<progresses.length;i++){
        workDay.push(Math.ceil((100-progresses[i])/speeds[i]))
    }
    
    let first = workDay[0]
      const result = []
      let count = 0
   
      for(let i=0;i<workDay.length;i++){
          if(workDay[i]>first){
              result.push(count)
              first = workDay[i]
              count=1
          }
          else{
              count++
          }
    }
           result.push(count)
           return result
}
    