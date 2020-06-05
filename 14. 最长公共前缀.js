/* 14. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。 */

/**
 * @param {string[]} strs
 * @return {string}
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 2) {
    return strs[0] || "";
  }
  let res = "",
    minStr = strs[0],
    minStrLen = minStr.length;

  //   res = minStr[0]
  for (const s of minStr) {
    res += s;
    if (!strs.every((x) => x.indexOf(res) === 0)) {
      return res.substr(0, res.length - 1);
    }
  }
  return res;
};
