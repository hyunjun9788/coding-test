let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0])
let arr = []
let str = ''
for(let i=1;i<=count;i++){
    arr.push(Number(input[i]))
}

arr.sort((a,b)=>a-b)
for(let i=0;i<arr.length;i++){
    str+=arr[i] + '\n'
}
console.log(str)