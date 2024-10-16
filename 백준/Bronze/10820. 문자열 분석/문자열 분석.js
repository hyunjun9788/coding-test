(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().split("\n");
    for (let i = 0; i < input.length; i++) {
        let count = [0, 0, 0, 0]
        let str = input[i].split('')

        if (input[i] === '') {
            continue
        }
        for (let j = 0; j < str.length; j++) {

            if (str[j].charCodeAt(0) >= 97 && str[j].charCodeAt(0) <= 122) {
                count[0]++
            }
            else if (str[j].charCodeAt(0) >= 65 && str[j].charCodeAt(0) <= 90) {
                count[1]++
            }

            else if (str[j] === ' ') {
                count[3]++
            }
            else if (str[j].charCodeAt(0) >= 48 && str[j].charCodeAt(0) <= 57) {
                count[2]++
            }
        }
        console.log(count.join(' '))
    }
}
)();
