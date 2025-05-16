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
// const fs = require("fs");
// const input = fs
//   .readFileSync("input.txt", "utf8")
//   .toString()
//   .trim()
//   .split("\n");

// const n = Number(input[0]);
// const m = Number(input[1]);
// const busInfo = input.slice(2).map((info) => info.trim().split(" "));
const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8") // 백준 제출용
    : fs.readFileSync("input.txt", "utf8"); // 로컬 테스트용

const lines = input.trim().split("\n");

// 👇 아래에서 문제에 맞게 입력 파싱 & 로직 작성
function main() {
  const n = Number(lines[0]);
  const arr = lines[1].split(" ").map(Number);

  // 예시: 배열 정렬 후 출력
  arr.sort((a, b) => a - b);
  console.log(arr.join(" "));
}

main();
