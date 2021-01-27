/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


/**
 * 执行用时： 160 ms , 在所有 JavaScript 提交中击败了 5.99% 的用户
 * 内存消耗： 42.8 MB , 在所有 JavaScript 提交中击败了 5.04% 的用户 
 * @param {*} l1
 * @param {*} l2
 * @return {*} 
 */
var mergeTwoLists = function (l1, l2) {
  let arr = [];

  let temp = l1;

  while (true && temp) {
    arr.push(temp.val);
    if (!temp.next) {
      break;
    }
    temp = temp.next;
  }
  temp = l2;
  while (true && temp) {
    arr.push(temp.val);
    if (!temp.next) {
      break;
    }
    temp = temp.next;
  }
  arr = arr.sort((a, b) => a - b);
  console.log(arr);

  // let res = new ListNode(arr[0])
  let res = null;

  let obj = null;

  let i = 0,
    len = arr.length;
  while (i < len) {
    if (!res) {
      res = new ListNode(arr[i]);
      obj = res;
    } else {
      const t = new ListNode(arr[i]);

      obj.next = t;
      obj = t;
    }

    i++;
  }
  console.log(res);

  return res;
  // arr.forEach
};
