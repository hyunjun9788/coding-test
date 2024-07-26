function solution(num) {
    let n = num;
    let steps = 0;
    while (n !== 1) {
        if (n%2 === 0) {
            n=n/2;
        } else {
            n=n*3+1;
        }
        steps++;
    }
    if(steps>=500){
        return -1
    }
    return steps; 
}

