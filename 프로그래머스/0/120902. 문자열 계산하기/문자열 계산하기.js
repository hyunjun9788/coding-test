function solution(my_string) {
    
    let arr = []
    let splitedSpace = my_string.split(' ')
    let sum = Number(splitedSpace[0])
    console.log(splitedSpace)
    for(let i=1;i<splitedSpace.length;i++){
        if(splitedSpace[i]==='+'){
        sum+=Number(splitedSpace[i+1])
    }else if(splitedSpace[i]==='-'){
        sum-=Number(splitedSpace[i+1])
    }
    }
    return sum
}