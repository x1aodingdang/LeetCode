/* 
示例 5:

输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
     因此返回 INT_MIN (−231) 。
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  // 第一步 先去掉空格
  str = str.trim();
  var res = "";

  var i = 0;
  for (var s of str) {
    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(s) ||
      (i === 0 && ["-", "+"].includes(s))
    ) {
      res += s;
    } else {
      break;
    }
    i++;
  }
  var num = Number.parseInt(res);

  if (Number.isNaN(num)) return 0;

  var max = 2 ** 31;

  if (num > max - 1) {
    return max - 1;
  }

  if (num < -max) {
    return -max;
  }
  return res;
};

// 正则还是太耗时间了
var myAtoi = function (str) {
  var res = str.trim().match(/[-|+|0-9]{1,}/);
  if (res && res.index === 0) {
    var num = Number.parseInt(res[0]);

    if (Number.isNaN(num)) return 0;

    var max = 2 ** 31;

    if (num > max - 1) {
      return max - 1;
    }

    if (num < -max) {
      return -max;
    }

    return num;
  }
  return 0;
};

console.log(myAtoi("  -4s2"));
