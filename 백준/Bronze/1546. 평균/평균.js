 let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0]
let score = input[1].split(' ').map(Number)
let sum =0 
let max = score.reduce((a,b)=>Math.max(a,b))
let fixScore = score.map((v)=>v/max*100)

for(let i=0;i<score.length;i++){
    sum+=fixScore[i]
}
console.log(sum/count)