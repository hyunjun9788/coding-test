function solution(priorities, location) {
    let queue = priorities.map((priority, index) => [priority, index]);
    let result = 0;
    while (queue.length > 0) {
        let max = Math.max(...queue.map(item => item[0])); 
        let [priority, index] = queue.shift();

        if (priority === max) {
            result += 1;
            if (index === location) { 
                return result;
            }
        } else {
            queue.push([priority, index]);
        }
    }
}
