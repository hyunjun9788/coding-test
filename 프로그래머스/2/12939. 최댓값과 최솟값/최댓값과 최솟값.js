function solution(s) {
    const _s = s.split(' ').map(Number)
    _s.sort((a,b) => a-b)
    
    const result = [_s[0],_s[_s.length-1]]
    return result.join(' ')
}