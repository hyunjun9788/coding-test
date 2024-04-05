function solution(emergency) {
const sortedArr = [...emergency].sort((a,b)=>b-a)
console.log(sortedArr)
const newArr =  sortedArr.map((v,i)=>sortedArr.indexOf(emergency[i])+1)
return newArr
}