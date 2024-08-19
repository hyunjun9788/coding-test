let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0])
let star = ''
for(let i=1;i<=a;i++){
    for(let j=1;j<=i;j++){
        star+='*'
    }
    star+='\n'
}
  console.log(star)
