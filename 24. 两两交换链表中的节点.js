/****
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 * 输入：head = []
 * 输出：[]
 *
 * 输入：head = [1]
 * 输出：[1]
 *
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 单纯的改变节点内部的值
var swapPairs = function (head) {
  let flag = false;
  let res = head,
    temp = null;
  while (res && res.val !== undefined) {
    if (!flag) {
      temp = res.val;
      if (!res.next) {
        break;
      }
      res.val = res.next.val;
    } else {
      res.val = temp;
    }
    flag = !flag;
    res = res.next;
  }
  return head;
};
