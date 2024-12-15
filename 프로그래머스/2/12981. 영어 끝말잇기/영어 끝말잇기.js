function solution(n, words) {
   const wordObj = {}
   const usedWords = new Set()
   let prevWord = ""
   
   for(let i=0; i<words.length;i++){
       const currentWord = words[i]
       
       if(usedWords.has(currentWord)){
           return [(i%n)+1, Math.floor(i/n) + 1]
       }
       
       if(prevWord && prevWord !== currentWord[0]){
           return [(i%n)+1, Math.floor(i/n) +1]
       }
       usedWords.add(currentWord)
       prevWord = currentWord[currentWord.length-1]
       
   }
    return [0,0]
}