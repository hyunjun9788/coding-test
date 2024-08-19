let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0])
let arr=input[1].split(' ').map(x=>Number(x))
let max = arr.reduce((a,b)=>Math.max(a,b))
let min =  arr.reduce((a,b)=>Math.min(a,b))

console.log(`${min} ${max}`)