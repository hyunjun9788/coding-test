let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str = input[0].split('').sort((a,b)=>b-a).join('')
console.log(str)