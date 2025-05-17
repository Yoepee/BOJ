/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1000                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: kdy2975 <boj.kr/u/kdy2975>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1000                           #+#        #+#      #+#    */
/*   Solved: 2025/05/17 19:19:52 by kdy2975       ###          ###   ##.kr    */
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
        .split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);
