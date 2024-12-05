function solution(cards1, cards2, goal) {
    const result = []
    for(let i=0;i<goal.length;i++){
        let firstCards1 = cards1[0]
        let firstCards2 = cards2[0]

        if(firstCards1 === goal[i]){
            result.push(firstCards1)
            cards1.shift()
        }
        if(firstCards2 === goal[i]){
            result.push(firstCards2)
            cards2.shift()
        }
        if(firstCards1 !== goal[i] && firstCards2 !== goal[i]){
            return 'No'
        }
    }

        return 'Yes'
}