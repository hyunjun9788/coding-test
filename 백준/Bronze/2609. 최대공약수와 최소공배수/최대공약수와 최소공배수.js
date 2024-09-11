(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let [a, b] = input[0].split(' ').map(Number);


    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    let max = gcd(a, b);
    let lcm = (a * b) / max;

    console.log(max);
    console.log(lcm);
})();