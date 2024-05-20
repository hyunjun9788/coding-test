function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    }

    let minValue = Math.min(...arr);
    let answer = arr.filter(v => v !== minValue);

    return answer.length ? answer : [-1];
}