let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0])
let star = ''
for(let i=1;i<=a;i++){
    star+='*'
    console.log(star)
}