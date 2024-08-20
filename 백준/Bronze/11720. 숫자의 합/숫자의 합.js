let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0])
let b = input[1].split('').map(Number)

let sum = b.reduce((a,b)=>a+b)
console.log(sum)