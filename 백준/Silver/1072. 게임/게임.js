function minAdditionalGames(X, Y) {
    let currentZ = Math.floor((Y * 100) / X);

    let left = 0;
    let right = 2000000000

    if (Math.floor(((Y + right) * 100) / (X + right)) == currentZ) {
        return -1;
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let newZ = Math.floor(((Y + mid) * 100) / (X + mid));

        if (newZ > currentZ) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

(function main() {
    let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
    
    for (let i = 0; i < input.length; i++) {
        let [X, Y] = input[i].split(' ').map(Number);
        console.log(minAdditionalGames(X, Y));
    }
})();