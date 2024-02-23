function solution(my_string) {
    const arr = my_string.split('');
    const result = arr.filter(v => v !== 'a' && v !== 'e' && v !== 'i' && v !== 'o' && v !== 'u');
    
    return result.join('');
}