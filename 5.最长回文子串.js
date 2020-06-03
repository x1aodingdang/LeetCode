/* 5. 最长回文子串
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb" */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = s[0] || "";
  const sLen = s.length;

  for (var i = 0; i < sLen; i++) {
    // 从中间算两边的数   此时 i 为中间数

    // 回文是偶数和奇数的情况
    for (var x = 0; x < 2; x++) {
      let left = i - x,
        right = i + 1,
        // str = s[i];
        str = x == 0 ? "" : s[i];
      while (s[left] && s[right] && s[left] === s[right]) {
        str = `${s[left]}${str}${s[right]}`;
        left--;
        right++;
      }
      res = str.length > res.length ? str : res;
    }
  }
  return res;
};

longestPalindrome("babad");

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//   const sLen = s.length;
//   if (sLen < 2) return s;

//   let res = s[0];
//   for (var i = 0; i < sLen; i++) {
//     var _i = s[i];
//     var str = _i;
//     for (var j = i + 1; j < sLen; j++) {
//       var _j = s[j];
//       str += _j;

//       if (_i === _j) {
//         if (_j === s[j + 1]) continue; // ccc
//         res = str.length > res.length ? str : res;
//         break;
//       }
//     }
//   }
//   return res;
// };

// longestPalindrome("ac");
