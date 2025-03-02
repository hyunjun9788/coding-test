function solution(begin, target, words) {
    if(!words.includes(target)) return 0
    
    const queue = [[begin,0]]
    const visited = new Set()
    
    while(queue.length>0){
        const [current,count] = queue.shift()
        
        if(target === current){
            return count
        }
        for(let i=0;i<words.length;i++){
            const word = words[i]
            if(!visited.has(word) && isDiffOneWord(current,word)){
                visited.add(word)
                queue.push([word,count+1])
            }
        }
    }
        return 0
}
    
    function isDiffOneWord(word1,word2){
        let diffCount =0
        for(let i=0;i<word1.length;i++){
            if(word1[i] !== word2[i]){
                diffCount++
            }
            if(diffCount > 1) return false
        }
        return diffCount === 1
    }