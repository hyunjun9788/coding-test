let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0])
let result = []
let arr = input[1].split(' ').map(Number)

let sortArr =[...new Set(arr)]
 sortArr.sort((a,b)=>a-b)

let map = new Map()
for(let i=0;i<arr.length;i++){
    map.set(sortArr[i],i)
}

let answer=''
for(let i=0;i<arr.length;i++){
    answer+=map.get(arr[i]) + " ";
}
console.log(answer)