(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let arr = input[0].split('')
    let result = []
    const solution = (line) => {
        let answer = line;
        const regExp = /<[a-z\s]+>|[a-z0-9]+/g;
        answer = answer.replace(regExp, (word) => {
            return word.startsWith("<") ? word : word.split("").reverse().join("");
        });

        return answer;
    };

    console.log(solution(input[0]));

})();
