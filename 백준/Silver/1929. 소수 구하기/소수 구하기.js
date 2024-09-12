(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [m, n] = input[0].split(' ').map(Number)

    let primes = Array(n + 1).fill(true)
    primes[0] = primes[1] = false

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false
            }
        }
    }

    let result = []
    for (let i = m; i <= n; i++) {
        if (primes[i]) {
            result.push(i)
        }
    }
    console.log(result.join('\n'))
})();