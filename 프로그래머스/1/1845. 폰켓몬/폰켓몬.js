function solution(nums) {
    const obj = new Set(nums)
    
    const n = nums.length /2
    
   if(obj.size >= n){
       return n
   }else{
       return obj.size
   }
}