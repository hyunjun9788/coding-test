function solution(arr) {
    let newArr = [arr[0]]; 
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] !== arr[i - 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}