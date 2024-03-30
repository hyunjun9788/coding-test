function solution(score) {
    const grade = []
    const avg =  score.map((v,i)=>(v[0]+v[1])/2)
    const sortedAvg = [...avg].sort((a,b)=>b-a)
    console.log(avg)
    console.log(sortedAvg)
     avg.forEach((v,i)=>grade.push(sortedAvg.indexOf(v)+1))
    return grade
}