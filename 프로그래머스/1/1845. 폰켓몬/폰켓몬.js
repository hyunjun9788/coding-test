function solution(nums) {
    const sortNums = new Set(nums)
    
    if(sortNums.size > nums.length/2){
        return nums.length/2
    }else{
        return sortNums.size
    }
}