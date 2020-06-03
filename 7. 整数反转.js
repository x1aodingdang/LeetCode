/* 7. 整数反转
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。 */

/**
 * 解一
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var _x = String(x);
  var res = "";
  var num = 0;
  for (var str of _x) {
    res = str.concat(res);
  }
  num = x < 0 ? -Number.parseInt(res) : Number.parseInt(res);

  //   if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) return 0;
  if (num < -2147483648 || num > 2147483647) return 0;

  return num;
};

// console.log(reverse(1534236469));

var reverse2 = function (x) {
  var _x = String(x);

  var num = Number.parseInt(_x.split("").reverse().join("").replace("-", ""));

  num = x < 0 ? -num : num;

  //   if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) return 0;
  if (num < -2147483648 || num > 2147483647) return 0;

  return num;
};
console.log(reverse2(1534236469));
