class Deque {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    push(element) {
        this.items[this.tail] = element;
        this.tail++;
    }

    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }

    front() {
        return this.isEmpty() ? -1 : this.items[this.head];
    }

    back() {
        return this.isEmpty() ? -1 : this.items[this.tail - 1];
    }

    size() {
        return this.tail - this.head;
    }

    isEmpty() {
        return this.size() === 0;
    }
}


(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let count = Number(input[0]);
    let queue = new Deque();
    let result = [];

    for (let i = 1; i <= count; i++) {
        let [func, num] = input[i].split(' ');

        if (func === 'push') {
            queue.push(Number(num));
        }
        else if (func === 'front') {
            result.push(queue.front());
        }
        else if (func === 'back') {
            result.push(queue.back());
        }
        else if (func === 'size') {
            result.push(queue.size());
        }
        else if (func === 'empty') {
            result.push(queue.isEmpty() ? 1 : 0);
        }
        else if (func === 'pop') {
            result.push(queue.pop());
        }
    }

    console.log(result.join('\n'));
})();