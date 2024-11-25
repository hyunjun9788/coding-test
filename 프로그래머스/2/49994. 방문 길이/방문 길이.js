function solution(dirs) {
    
    const direction = {'U':[0,1], 'L':[-1,0], 'R':[1,0], 'D':[0,-1]}
    let visited = new Set()
    let now = [0,0]
    
    for(let dir of dirs){
        const nx = now[0] + direction[dir][0]
        const ny = now[1] + direction[dir][1]
        
        if(nx<-5 || nx>5 || ny>5 || ny<-5){
            continue
        }
        
        visited.add(`${now[0]}${now[1]}${nx}${ny}`);
        visited.add(`${nx}${ny}${now[0]}${now[1]}`);
        now = [nx, ny];
}
    return visited.size / 2;
}