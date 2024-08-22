let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = []
let count = Number(input[0])
for(let i=1;i<=count;i++){
    let [x,y] = input[i].split(' ').map(Number)
    arr.push([x,y])
}

arr.sort((a,b)=>{
    if(a[1]===b[1]){
        return a[0]-b[0]
    }else{
        return a[1]-b[1]
    }
})

let str = ''
for(let i=0;i<arr.length;i++){

    str+=arr[i][0] + ' ' + arr[i][1] + '\n'
}

console.log(str)