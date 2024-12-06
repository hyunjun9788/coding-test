function solution(record) {
    const recordObj = {}
    const result = []
    for(let i=0;i<record.length;i++){
        const recordItem = record[i].split(' ') 
        recordObj[recordItem[1]] = {}
    }
    
    for(let i=0;i<record.length;i++){
        const recordItem = record[i].split(' ') 
        if(recordItem[0] === 'Enter' || recordItem[0] === 'Change' )
        recordObj[recordItem[1]]['nickname'] = recordItem[2]
        }
    
    
    for(let i=0;i<record.length;i++){
        const recordItem = record[i].split(' ') 
        if(recordItem[0] === 'Enter'){
            result.push(`${recordObj[recordItem[1]].nickname}님이 들어왔습니다.`)
        }
        if(recordItem[0] === 'Leave'){
            result.push(`${recordObj[recordItem[1]].nickname}님이 나갔습니다.`)
        }
    }
    
        return result

}