let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0])

for(let i=1;i<=count;i++){
    let a = input[i].split(' ')[0]
    let b = input[i].split(' ')[1]
    let result = ''
        for(let j=0;j<=b.length;j++){
        result+=b.charAt(j).repeat(a)
    }
    console.log(result)
}

