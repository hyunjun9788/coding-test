function solution(s) {
    const pattern = /^[0-9]{4}$|^[0-9]{6}$/;
    return pattern.test(s);
}