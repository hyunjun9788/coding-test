let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCount = Number(input[0])

for(let i=1;i<=testCount;i++){
 let data = input[i].split(' ').map(Number)
 let n = data[0]
 let summary = 0
 for(let i=1;i<=n;i++){
     summary+=data[i]
 }
    let average = summary / n
    let cnt = 0
    for(let i=1; i<=n; i++){
        if(data[i]>average){
            cnt+=1
        }
    }
    console.log(`${(cnt / n*100).toFixed(3)}%`)
}
