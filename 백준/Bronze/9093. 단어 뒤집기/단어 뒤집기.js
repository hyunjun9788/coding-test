(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let num = Number(input[0])



    for (let i = 1; i <= num; i++) {
        let result = ''
        let arr = input[i].trim().split(' ')

        for (let j = 0; j < arr.length; j++) {
            let reverse = arr[j].split('').reverse().join('')
            result += reverse + ' '
        }
        console.log(result)

    }


}
)();
