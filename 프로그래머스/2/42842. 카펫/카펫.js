function solution(brown, yellow) {
    const sum = brown + yellow;
    let w, h;

    for (let i = 3; i < sum; i++) {
        if (sum % i === 0) {
            w = i;
            h = Math.floor(sum / i);
            if ((w - 2) * (h - 2) === yellow) {
                break;
            }
        }
    }

    return [w, h].sort((a, b) => b - a);
}