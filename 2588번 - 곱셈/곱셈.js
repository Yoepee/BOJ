/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2588                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: kdy2975 <boj.kr/u/kdy2975>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2588                           #+#        #+#      #+#    */
/*   Solved: 2025/05/20 01:27:35 by kdy2975       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const path = require("path");

const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin", "utf8")
    : fs
        .readFileSync(path.join(__dirname, "input.txt"), "utf8")
        .toString()
        .trim()
        .split("\n");

const [a, b] = input.map(Number);
let pos = 1;

while (pos < 1000) {
  const posNum = Math.floor(b / pos) % 10;
  console.log(a * posNum);
  pos *= 10;
}
console.log(a * b);
