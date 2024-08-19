let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0])
let result = ''


for(let i=1;i<=count;i++){
    let a = input[i].split(' ')[0]
    let b = input[i].split(' ')[1]
    let sum = Number(a) + Number(b)
    
    result+=sum + '\n'
}
console.log(result)