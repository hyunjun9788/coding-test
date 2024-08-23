let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [x,y] = input[0].split(' ').map(Number)
let arr = input[1].split(' ')
let start=0
let end = arr.reduce((a,b)=>Math.max(a,b))

let result = 0
while(start<=end){
    let mid = parseInt((start+end)/2)
    let total = 0
    for(a of arr){
        if(a>mid){
            total += a-mid
        } 
    }
    if(total < y){
        end=mid-1
    }
    else{
        result = mid;
        start = mid + 1
        }
}
console.log(result)
