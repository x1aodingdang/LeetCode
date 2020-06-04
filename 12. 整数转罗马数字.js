/* 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

示例 1:

输入: 3
输出: "III"
示例 2:

输入: 4
输出: "IV"
示例 3:

输入: 9
输出: "IX"
示例 4:

输入: 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
示例 5:

输入: 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/integer-to-roman
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number} num
 * @return {string}
 */

const map = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
  4: "IV",
  9: "IX",
  40: "XL",
  90: "XC",
  400: "CD",
  900: "CM",
};
// 没有比这更糟糕的代码了
var intToRoman = function (num) {
  if (map[num]) return map[num];

  const _num = String(num);

  // 分四种情况
  switch (true) {
    case num < 10:
      return getBit(num);
      break;
    case num < 100:
      return getTowBit(num);
      break;
    case num < 1000:
      return getThreeBit(num);
      break;
    case num < 4000:
      return getFourBit(num);
      break;
  }
  function getCommon(one, bit, num, zeroCount) {
    // 0 的数量     10 就为  1个  100 就是 2个
    const _map = {
      10: "L",
      100: "D",
      1000: "",
    };

    let zeroStr =
      zeroCount === 10
        ? "0"
        : zeroCount === 100
        ? "00"
        : zeroCount === 1000
        ? "000"
        : "";

    // for (let i = 0; i < zeroCount; i++) zeroStr += "0";
    // map 中 包含 这个 的
    var res = map[`${one}${zeroStr}`];
    if (res) {
      // 10  40  50 90 num
      return `${res}${bit}`;
    }
    //  20 30
    var res = threeBefore(num, 1 * zeroCount); // 1 2 3
    if (res) return res + bit;

    //  60 70 80
    return (
      _map[zeroCount] + threeBefore(num % (5 * zeroCount), 1 * zeroCount) + bit
    );
  }
  function getBit(num) {
    num = Number(num);
    if (num === 0) return "";
    if (map[num]) return map[num];
    var res = threeBefore(num, 1); // 1 2 3
    if (res) return res;
    // 6 7 8 9
    return "V" + threeBefore(num % 5, 1);
  }
  function getTowBit(num) {
    var [one, last] = String(num);
    var bit = `${getBit(last)}`;
    if (one == 0) return bit;

    return getCommon(one, bit, num, 10);
  }
  function getThreeBit(num) {
    var [one, tow, last] = String(num);
    var bit = getTowBit(`${tow}${last}`);
    if (one == 0) return bit;
    return getCommon(one, bit, num, 100);
  }
  function getFourBit(num) {
    var [one, tow, three, last] = String(num);
    var bit = `${getThreeBit(`${tow}${three}${last}`)}`;

    return getCommon(one, bit, num, 1000);
  }

  // < 3
  function threeBefore(num, type = 1) {
    // type =  1  10 100 1000
    var [first] = String(num);
    first = Number(first);
    if (first > 3) return "";
    let str = "";
    for (let i = 0; i < first; i++) str += map[type];
    return str || "";
  }
};
var intToRoman = function (num) {
  if (map[num]) return map[num];

  // 分四种情况
  switch (true) {
    case num < 10:
      return getBit(num);
      break;
    case num < 100:
      return getTowBit(num);
      break;
    case num < 1000:
      return getThreeBit(num);
      break;
    case num < 4000:
      return getFourBit(num);
      break;
  }

  // 先获取 个位数   下面的 getTowBit getThreeBit getFourBit 思路是一样的 哦 没有比这更糟糕（菜鸡）的代码了
  function getBit(num) {
    num = Number(num);
    if (num === 0) return "";
    // 这里包含了  1 4 5  9
    if (map[num]) return map[num];
    // 这里值过滤  2 3 的情况
    var res = threeBefore(num, 1);
    if (res) return res;
    //  剩下的 6 7 8
    return "V" + threeBefore(num % 5, 1);
  }
  function getTowBit(num) {
    var [one, last] = String(num);
    var bit = `${getBit(last)}`;
    if (one == 0) return bit;

    // map 中 包含 这个 的
    var res = map[`${one}0`];
    if (res) {
      // 10  40  50 90 num
      return `${res}${bit}`;
    }

    //  20 30
    var res = threeBefore(num, 10); // 1 2 3
    if (res) return res + bit;

    //  60 70 80
    return "L" + threeBefore(num % 50, 10) + bit;
  }
  function getThreeBit(num) {
    var [one, tow, last] = String(num);
    var bit = getTowBit(`${tow}${last}`);
    if (one == 0) return bit;

    // map 中 包含 这个 的
    var res = map[`${one}00`];
    if (res) {
      // 10  40  50 90 num
      return `${res}${bit}`;
    }

    // 20 30
    var res = threeBefore(num, 100); // 1 2 3
    if (res) return res + bit;

    // 60 70 80
    return "D" + threeBefore(num % 500, 100) + bit;
  }
  function getFourBit(num) {
    var [one, tow, three, last] = String(num);
    var bit = `${getThreeBit(`${tow}${three}${last}`)}`;

    // map 中 包含 这个 的
    var res = map[`${one}000`];
    if (res) {
      // 10  40  50 90 num
      return `${res}${bit}`;
    }

    // 10 20 30
    var res = threeBefore(num, 1000); // 1 2 3
    if (res) return res + bit;
  }

  // < 3
  function threeBefore(num, type = 1) {
    // type =  1  10 100 1000
    var [first] = String(num);
    first = Number(first);
    if (first > 3) return "";
    let str = "";
    for (let i = 0; i < first; i++) str += map[type];
    return str || "";
  }
};

// 个位数

console.log(intToRoman(200));
