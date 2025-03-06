function solution(s) {
    return s.split(' ').map((v)=>v.length>0 ? v[0].toUpperCase() + v.slice(1).toLowerCase() : '').join(' ')
}