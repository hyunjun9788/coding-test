function solution(s) {
    const arr = s.split('')
    
    let result = [...arr].length%2===1?[...arr].slice(arr.length/2,arr.length/2+1):[...arr].slice(arr.length/2-1,arr.length/2+1)
    return result.join('')
}