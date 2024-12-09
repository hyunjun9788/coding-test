function solution(id_list, report, k) {
    const reportObj = {}
    const reportArr = {}
    const stopIdObj = {}
    const result = Array.from(id_list.length).fill(0)
    
    for(let i=0;i<id_list.length;i++){
        reportObj[id_list[i]] = []
    }
    
    for(let i=0;i<report.length;i++){
        const [from,to] = report[i].split(' ')
        if(!reportObj[from].includes(to)){
            reportObj[from].push(to)
        }
    }
    
    for(let key in reportObj){
        const reportValue = reportObj[key]
        
        for(let i=0; i<reportValue.length;i++){
            if(!stopIdObj[reportValue[i]]){
                stopIdObj[reportValue[i]] = 1
            }
            else{
            stopIdObj[reportValue[i]] += 1
            }
        }
        
    }

    
    const stopResult = Object.entries(stopIdObj).map((v,i)=>{if(v[1]>=k){return v[0]}})
    
    for(let key in reportObj){
        const arr = reportObj[key]
        let count = 0
        for(let i=0;i<arr.length;i++){
            if(stopResult.includes(arr[i])){
                count++
            }
        }
        result.push(count)
    }
    return result
}