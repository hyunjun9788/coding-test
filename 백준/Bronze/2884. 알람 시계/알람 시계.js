let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])

if(b<45){
  a=a-1
  b+=15
  if(a<0) a=23
}
else{
    a=a
b= b-45
}
console.log(`${a} ${b}`)