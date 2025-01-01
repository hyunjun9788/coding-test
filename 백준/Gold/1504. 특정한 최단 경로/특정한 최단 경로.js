(function main() {
  const fs = require("fs");
  const isLocal = false;
  const filePath = isLocal ? "t.txt" : "/dev/stdin";
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  class MinHeap {
    constructor() {
      this.items = []
    }

    size() {
      return this.items.length
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

    push(item) {
      this.items.push(item)
      this.bubbleUp()
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

        if (this.items[index][0] < this.items[smallerChild][0]) {
          break
        }

        this.swap(index, smallerChild)
        index = smallerChild
      }
    }
  }

  const [N, E] = input[0].split(' ').map(Number)

  const graph = Array.from({ length: N + 1 }, () => [])
  const required = input[input.length - 1].split(' ').map(Number)

  for (let i = 1; i < input.length - 1; i++) {
    const [a, b, c] = input[i].split(' ').map(Number)
    graph[a].push([b, c])
    graph[b].push([a, c])
  }

  function dijkstra(start) {
    const dist = Array.from({ length: N + 1 }, () => Infinity)

    const pq = new MinHeap()
    pq.push([0, start])
    dist[start] = 0

    while (pq.size() > 0) {
      const [curDist, curNode] = pq.pop()
      if (curDist > dist[curNode]) {
        continue
      }

      for (let [adjNode, adjDist] of graph[curNode]) {
        const newDist = curDist + adjDist

        if (dist[adjNode] > newDist) {
          pq.push([newDist, adjNode])
          dist[adjNode] = newDist
        }
      }
    }

    return dist
  }

  const distFrom1 = dijkstra(1)
  const distFromV1 = dijkstra(required[0])
  const distFromV2 = dijkstra(required[1])

  const case1 = distFrom1[required[0]] + distFromV1[required[1]] + distFromV2[N]
  const case2 = distFrom1[required[1]] + distFromV2[required[0]] + distFromV1[N]

  const result = Math.min(case1, case2)

  console.log(result >= Infinity ? -1 : result)
})();