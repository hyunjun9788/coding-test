
function solution(balls, share) {
    if (share === 0) return 0;
    let numerator = BigInt(1);
    let denominator = BigInt(1);
    
    for (let i = BigInt(balls); i >= BigInt(balls - share + 1); i--) {
        numerator *= i;
    }
    
    for (let i = BigInt(share); i >= BigInt(1); i--) {
        denominator *= i;
    }
    
    return Number(numerator / denominator);
}