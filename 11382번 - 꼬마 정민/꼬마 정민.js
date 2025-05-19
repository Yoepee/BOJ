/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11382                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: kdy2975 <boj.kr/u/kdy2975>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11382                          #+#        #+#      #+#    */
/*   Solved: 2025/05/20 01:49:10 by kdy2975       ###          ###   ##.kr    */
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
        .split(" ");

const [a, b, c] = input.map(Number);
console.log(a + b + c);
