(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim()

    let oct = ""

    while (input.length >= 3) {
        oct = parseInt(input.slice(input.length - 3), 2).toString(8) + oct
        input = input.slice(0, input.length - 3)

    }
    console.log((input ? parseInt(input, 2).toString(8) : "") + oct)
})();
