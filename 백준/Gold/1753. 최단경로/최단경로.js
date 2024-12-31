(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  class MinHeap {
    constructor() {
      this.items = []
    }

    push(item) {
      this.items.push(item)
      this.bubbleUp()
    }

    pop() {
      if (this.size() === 0) {
        return
      }
      const min = this.items[0]
      this.items[0] = this.items[this.size() - 1]
      this.items.pop()
      this.bubbleDown()

      return min
    }

    swap(a, b) {
      [this.items[a], this.items[b]] = [this.items[b], this.items[a]]
    }

    bubbleUp() {
      let index = this.size() - 1
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2)
        if (this.items[parentIndex][0] < this.items[index][0]) {
          break
        }
        this.swap(index, parentIndex)
        index = parentIndex
      }
    }

    bubbleDown() {
      let index = 0
      while (index * 2 + 1 < this.size()) {
        let leftChild = index * 2 + 1
        let rightChild = index * 2 + 2

        let smallerChild = rightChild < this.size() && this.items[rightChild][0] < this.items[leftChild][0] ? rightChild : leftChild

        if (this.items[index][0] <= this.items[smallerChild][0]) {
          break
        }

        this.swap(index, smallerChild)
        index = smallerChild
      }
    }

    size() {
      return this.items.length
    }
  }

  const [V, E] = input[0].split(' ').map(Number)
  const K = Number(input[1])

  const graph = Array.from({ length: V + 1 }, () => [])

  for (let i = 2; i < input.length; i++) {
    const [u, v, w] = input[i].split(' ').map(Number)
    graph[u].push([v, w])
  }

  const dist = Array(V + 1).fill(Infinity)
  const pq = new MinHeap()

  dist[K] = 0
  pq.push([0, K])

  while (pq.size() > 0) {
    const [curDist, curNode] = pq.pop()
    if (curDist > dist[curNode]) {
      continue
    }

    for (let [adjNode, adjDist] of graph[curNode]) {
      const newDist = curDist + adjDist
      if (newDist < dist[adjNode]) {
        dist[adjNode] = newDist
        pq.push([newDist, adjNode])
      }
    }
  }
  console.log(dist.slice(1).map(d => (d === Infinity ? 'INF' : d)).join('\n'))

})();