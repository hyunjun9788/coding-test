(function main() {
    const fs = require("fs");
    const isLocal = false;
    const filePath = isLocal ? "t.txt" : "/dev/stdin";
    const input = fs.readFileSync(filePath).toString().trim().split('\n');

    const vows = ['a', 'e', 'i', 'o', 'u']

    const [L, C] = input[0].split(' ').map(Number)

    const passwordArr = input[1].split(' ').sort()
    const result = []

    function isPossible() {
        let vow = 0
        for (let i of result) {
            if (vows.includes(i)) {
                vow += 1
            }
        }

        const con = L - vow
        return (vow >= 1 && con >= 2)
    }

    function recursion(index, count) {


        if (count === L) {
            if (isPossible()) {
                console.log(result.join(''))
            }
            return
        }

        for (let i = index; i < C; i++) {
            result.push(passwordArr[i])
            recursion(i + 1, count + 1)
            result.pop()
        }
    }


    recursion(0, 0)


})();