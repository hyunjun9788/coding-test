class Queue{
    constructor(){
        this.items = []
        this.front = 0
        this.rear = 0
    }
    push(value){
        this.items.push(value)
        this.rear++
    }
    pop(){
        return this.items[this.front++]
    }
    isEmpty(){
        return this.front === this.rear
    }
}

function solution(maps) {
      const n = maps.length
    const m = maps[0].length
    const dist = Array.from({length:n},()=>Array.from({length:m},()=>-1))
    
    const move =[[-1,0],[0,-1],[0,1],[1,0]]
  
    
    const bfs = (start) => {
        const queue = new Queue()
        queue.push(start)
        dist[start[0]][start[1]]=1
        
        while(!queue.isEmpty()){
            const here = queue.pop()
            
            for(const [dx,dy] of move){
                const row = here[0] + dx
                const column = here[1] + dy
                
                if(row<0 || row>=n || column<0 || column>=m){
                    continue
                }
                
                if(maps[row][column] ===0){
                    continue
                }
                if(dist[row][column] === -1){
                    queue.push([row,column])
                    dist[row][column] = dist[here[0]][here[1]] + 1
                }
            }
        }
        
        return dist
    }
    
    bfs([0,0])
    return dist[n-1][m-1]
}