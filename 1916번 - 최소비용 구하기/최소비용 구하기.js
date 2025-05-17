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

// 문제별 로직 작성
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

const getMinIndex = () => {
  let minValue = INF;
  let index = 0;
  for (let i = 0; i <= n; i++) {
    if (minValue > dist[i] && !visited[i]) {
      minValue = dist[i];
      index = i;
    }
  }

  return index;
};

const dijkstra = (start) => {
  dist[start] = 0;
  visited[start] = true;

  for (let [adj, cost] of graph[start]) {
    dist[adj] = cost;
  }

  for (let i = 0; i < n - 1; i++) {
    let cur = getMinIndex();
    visited[cur] = true;
    for (let [adj, cost] of graph[cur]) {
      let totalCost = dist[cur] + cost;
      if (dist[adj] > totalCost) {
        dist[adj] = totalCost;
      }
    }
  }
};

dijkstra(start);

console.log(dist[end]);
