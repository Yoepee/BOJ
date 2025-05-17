/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1916                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: kdy2975 <boj.kr/u/kdy2975>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1916                           #+#        #+#      #+#    */
/*   Solved: 2025/05/17 04:20:07 by kdy2975       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const path = require("path");

const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8")
    : fs
        .readFileSync(path.join(__dirname, "input.txt"), "utf8")
        .toString()
        .trim()
        .split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const busInfo = input
  .slice(2, m + 2)
  .map((info) => info.trim().split(" ").map(Number));
const [start, end] = input[m + 2].trim().split(" ").map(Number);

const INF = Infinity;
const visited = Array(n + 1).fill(false);
const dist = Array(n + 1).fill(INF);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [a, b, c] = busInfo[i];
  graph[a].push([b, c]);
}

/**
 * 우선순위 큐 적용 X
 */

// const getMinIndex = () => {
//   let minValue = INF;
//   let index = 0;
//   for (let i = 0; i <= n; i++) {
//     if (minValue > dist[i] && !visited[i]) {
//       minValue = dist[i];
//       index = i;
//     }
//   }

//   return index;
// };

// const dijkstra = (start) => {
//   dist[start] = 0;
//   visited[start] = true;

//   for (let [adj, cost] of graph[start]) {
//     dist[adj] = Math.min(dist[adj], cost);
//   }

//   for (let i = 0; i < n - 1; i++) {
//     let cur = getMinIndex();
//     visited[cur] = true;
//     for (let [adj, cost] of graph[cur]) {
//       let totalCost = dist[cur] + cost;
//       if (dist[adj] > totalCost) {
//         dist[adj] = totalCost;
//       }
//     }
//   }
// };

// dijkstra(start);

// console.log(dist[end]);

/**
 * 우선순위 큐 적용 O
 */
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }

    return min;
  }

  heapifyDown(index) {
    while (index < this.heap.length) {
      const left = (index << 1) + 1;
      const right = (index << 1) + 2;
      let smallest = index;
      if (
        this.heap[left] &&
        this.heap[left].priority < this.heap[smallest].priority
      ) {
        smallest = left;
      }
      if (
        this.heap[right] &&
        this.heap[right].priority < this.heap[smallest].priority
      ) {
        smallest = right;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const dijkstra = (start) => {
  const queue = new PriorityQueue();
  queue.enqueue(start, 0);
  dist[start] = 0;
  console.log(queue);
  while (!queue.isEmpty()) {
    let { value, priority } = queue.dequeue();
    if (dist[value] < priority) continue;
    for (let [adj, cost] of graph[value]) {
      let totalCost = dist[value] + cost;
      if (dist[adj] > totalCost) {
        dist[adj] = totalCost;
        queue.enqueue(adj, totalCost);
      }
    }
  }
};

dijkstra(start);
console.log(dist[end]);
