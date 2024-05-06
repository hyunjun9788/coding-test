function solution(n)
{
    let sum =0
  const arr = n.toString().split('')
  arr.forEach((v)=>sum+=Number(v))
    
    return sum
}