function solution(A, B) {
   let arrA = [...A]
   
   for(let i=1; i<arrA.length;i++){
       if(A===B){
           return 0
       }else{
           arrA.unshift(arrA.pop())
           
           if(arrA.join('') === B){
               return i
           }
       }
   }
   return -1
}