(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let pattern = input[1].trim();
    let [start, end] = pattern.split('*');  // 패턴을 '*'로 나눕니다.
    let result = [];

    for (let i = 2; i < input.length; i++) {
        let fileName = input[i].trim();
        
        // 파일 이름이 패턴의 앞부분과 뒷부분을 모두 포함하는지 확인
        if (fileName.startsWith(start) && fileName.endsWith(end) && fileName.length >= start.length + end.length) {
            result.push('DA');
        } else {
            result.push('NE');
        }
    }

    console.log(result.join('\n'));
})();