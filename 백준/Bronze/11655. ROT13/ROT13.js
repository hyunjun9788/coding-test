(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().split("\n");

    let str = input[0].split('');
    let unicode = Array.from({ length: str.length }, (_, i) => str[i].charCodeAt(0));

    for (let i = 0; i < str.length; i++) {
        let code = unicode[i];
        if (code >= 65 && code <= 90) {
            unicode[i] = ((code - 65 + 13) % 26) + 65;
        }
        else if (code >= 97 && code <= 122) {
            unicode[i] = ((code - 97 + 13) % 26) + 97;
        }
    }

    let result = unicode.map(c => String.fromCharCode(c)).join('');
    console.log(result);
})();
