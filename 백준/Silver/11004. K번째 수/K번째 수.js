let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0].split(' ')[0])
let pick = Number(input[0].split(' ')[1])

let arr = input[1].split(' ').map(Number).sort((a,b)=>a-b)
console.log(arr[pick-1])