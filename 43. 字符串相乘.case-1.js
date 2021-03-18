/* 

给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/multiply-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */


/* 
// case 1 
864 ms
, 在所有 JavaScript 提交中击败了
5.05%

内存消耗：
45.8 MB
, 在所有 JavaScript 提交中击败了
7.25%
*/
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  const num1Len = num1.length;
  const num2Len = num2.length;

  // if (num1Len > num2Len) {
  //   num2Len.padSta
  // }

  const maxLen = Math.max(num1.length, num2.length);
  let num = 0; // 进位

  let res = 0;
  let i = 0;
  while (i < maxLen) {
    //

    // 倒序
    const d1 = num1[num1Len - i - 1];
    if (d1 === undefined) {
      i++;
      continue;
    }

    let j = 0;
    let tres = "".padStart(i, "0");
    while (j < maxLen) {
      const d2 = num2[num2Len - j - 1];
      if (d2 === undefined) break;

      const res = String(d1 * d2 + Number(num));

      tres = `${res}`.substr(res.length - 1) + tres;

      // 复位
      num = 0;
      num = Math.floor(res / 10);

      console.log("d1:", d1, "---", "d2:", d2);
      j++;
    }
    if (num !== 0) {
      tres = `${num}${tres}`;
      num = 0;
    }
    console.log(tres);

    res = add(`${res}`, tres);
    // res += Number(tres);

    i++;
  }
  return String(res);
};

function add(l1Res, l2Res) {
  const l1ResLen = l1Res.length,
    l2ResLen = l2Res.length;
  let len = 0;

  if (l1ResLen > l2ResLen) {
    len = l1ResLen;
    l2Res = String(l2Res).padStart(len, "0");
  } else {
    len = l2ResLen;
    l1Res = String(l1Res).padStart(len, "0");
  }

  let isAdd1 = false; // 进一位
  let addRes = "";
  for (let i = len - 1; i >= 0; i--) {
    let res = Number(l1Res[i]) + Number(l2Res[i]);
    if (isAdd1) {
      res += 1;
    }

    isAdd1 = false;
    if (res >= 10) {
      isAdd1 = true;
      res = res % 10;
    }
    addRes = res + addRes;
  }
  isAdd1 && (addRes = 1 + addRes);
  return addRes;
}

// console.log(multiply("123", "456"));
// console.log(multiply("999", "99"));
console.log(multiply("123456789", "987654321")); // 121932631112635269
