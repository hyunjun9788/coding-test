let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0])
let result = []
for(let i=1;i<=count;i++){
    let age = Number(input[i].split(' ')[0])
    let name = input[i].split(' ')[1]
    result.push([age,name])
}

result.sort((a,b)=>a[0]-b[0])
let str = ''
for(let i of result){
    str+=i[0] + ' ' + i[1] + '\n'
}
console.log(str)