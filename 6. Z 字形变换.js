/* 6. Z 字形变换
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
示例 1:

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
示例 2:

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:


L     D     R
E   O E   I I
E C   I H   N
T     S     G */
/**
 * @param {string} s
 * @param {number} numRow0s
 * @return {string}
 * @description 等到大佬的启发 https://leetcode-cn.com/problems/zigzag-conversion/solution/hua-jie-suan-fa-6-z-zi-xing-bian-huan-by-guanpengc/
 */
var convert = function (s, numRows) {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    res[i] = "";
  }

  let col = 0;
  let down = false;
  for (const _s of s) {
    res[col] += _s;
    if (col === 0 || col === numRows - 1) down = !down; // 在第一行和最后一行的时候 ++ 变 -- 、 -- 变 ++
    col += down ? 1 : -1;
  }

  return res.join("");
};

/* const arr = [];
  let count = 1;

  console.log(s.length / numRows, s.length % numRows, s.length);

  // return s[(numRows + numRows - 2) * count + 1];
  let str = "";

  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < s.length; i++) {
      // str += s[(numRows + numRows - 2) * i + j] || "-";
      str += s[(numRows + numRows - 2) * i + j] || "-";
      // s[(numRows + numRows - 2) * 0 + 0] || "-";  0
      // s[(numRows + numRows - 2) * 1 + 0] || "-";  6
      // s[(numRows + numRows - 2) * 2 + 0] || "-";  12
      // s[(numRows + numRows - 2) * 3 + 0] || "-";  18   ----

      //  s[(numRows + numRows - 2) * 0 + 1] || "-";
    }
  }

  return str;
  return s[(numRows + numRows - 2) * count];

  const _arr = [
    ["L", " ", " ", "D", " ", " ", "R"],
    ["E", " ", "O", "E", " ", "I", "I"],
    ["E", "C", " ", "I", "H", " ", "N"],
    ["T", " ", " ", "S", " ", " ", "G"],
  ];

  for (var x = 0; x < numRows; x++) {
    arr[x] = [];
  }
  console.log(JSON.stringify(arr));

  let row = 0;
  let i = 0;
  let col = 0;
  let flag = true; //   false 为--
  while (i < s.length) {
    arr[row][col] = s[i];
    if (i - 2)
      if (i * row < numRows) {
      }
    flag && col;
    i++;
    row++;
    if (row >= numRows) {
      col++; // w
      row = 0;
    }
  }

  //   for (var i = 0; i < numRows - 1; i++, row++) {
  //     arr[i][row] = s[i];
  //   }
  //   for (var row = 0; i < numRows - 1; i++, row++) {
  //     arr[i][row] = s[i];
  //   }
  console.table(arr);
  return arr; */

console.log(convert("LEETCODEISHIRING", 4));
