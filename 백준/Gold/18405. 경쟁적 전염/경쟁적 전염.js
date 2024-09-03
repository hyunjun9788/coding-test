(function main() {
    let isLocal = false;
    let fs = require("fs");
    let filePath = isLocal ? "test.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");
    let graph = []
    let data = []
    
    let [n,k] = input[0].split(' ').map(Number)
    
    for(let i=0;i<n;i++){
        graph.push(input[i+1].split(' ').map(Number))
        for(let j=0;j<n;j++){
            if(graph[i][j] !==0){
                data.push([graph[i][j],0,i,j])
            }
        }
    }
    
    data.sort((a,b)=>a[0]-b[0])
    queue=[]
    for(let x of data){
        queue.push(x)
    }
    let [targetS,targetX,targetY] = input[n+1].split(' ').map(Number)
    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]
    
    while(queue.length){
        let [virus,s,x,y] = queue.shift()
        
        if(targetS==s){
            break
        }
        
        for(let i=0;i<4;i++){
            let nx = x+dx[i]
            let ny = y+dy[i]
            if(nx>=0 && nx<n && ny>=0 && ny<n){
                if(graph[nx][ny]==0){
                  graph[nx][ny]=virus
                  queue.push([virus,s+1,nx,ny])
                }
             }
            
        }
    }
    
        console.log(graph[targetX - 1][targetY - 1])

    })();