let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ')

let reverseA = a.split('').reverse().join('')
let reverseB = b.split('').reverse().join('')
let result = [Number(reverseA),Number(reverseB)]
console.log(Math.max(...result))

