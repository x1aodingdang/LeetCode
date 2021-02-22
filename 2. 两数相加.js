/* 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


243
564
807


输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Next = l1;

  let l2Next = l2;

  let flagL1 = -1,
    flagL2 = 0;

  let isAdd1 = false; // 进一位

  let res = null,
    t = res;

  while (l1Next || l2Next) {
    let l1Val = 0;

    if (l1Next !== null) {
      l1Val = l1Next.val;
      l1Next = l1Next.next;
    } else {
      flagL1 = 1;
    }

    let l2Val = 0;
    if (l2Next !== null) {
      l2Val = l2Next.val;
      l2Next = l2Next.next;
    } else {
      flagL2 = 1;
    }

    let sum = l1Val + l2Val;
    if (isAdd1) {
      sum += 1;
    }
    isAdd1 = false;
    if (sum >= 10) {
      isAdd1 = true;
      sum = sum % 10;
    }

    if (res === null) {
      t = res = new ListNode(sum);
    } else {
      t = t.next = new ListNode(sum);
    }

    if (flagL1 === flagL2) {
      break;
    }
  }
  isAdd1 && (t = t.next = new ListNode(1));

  return res;
};

/*  console.log(l1Res);
  console.log(l2Res);

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

  let res = null,
    t = res;
  for (let i = len - 1; i >= 0; i--) {
    let sum = Number(l1Res[i]) + Number(l2Res[i]);
    if (isAdd1) {
      sum += 1;
    }

    isAdd1 = false;
    if (sum >= 10) {
      isAdd1 = true;
      sum = sum % 10;
    }

    if (res === null) {
      t = res = new ListNode(sum);
    } else {
      t = t.next = new ListNode(sum);
    }

    // addRes = sum + addRes;
  }
  // isAdd1 && (addRes = 1 + addRes);
  isAdd1 && (t = t.next = new ListNode(1));

  console.log(res);
  return res; */
