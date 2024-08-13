function solution(s) {
    let count = 0; 
    let totalZeroCount = 0; 

    while (s !== "1") {
        let zeroCount = 0;

        for (let char of s) {
            if (char === '0') {
                zeroCount++;
            }
        }

        totalZeroCount += zeroCount;

        s = (s.length - zeroCount).toString(2);
        count++;
    }

    return [count, totalZeroCount];
}