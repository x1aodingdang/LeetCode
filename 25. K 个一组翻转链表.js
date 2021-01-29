/**
 * 
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

  k 是一个正整数，它的值小于或等于链表的长度。

  如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

    示例：

  给你这个链表：1->2->3->4->5

  当 k = 2 时，应当返回: 2->1->4->3->5

  当 k = 3 时，应当返回: 3->2->1->4->5

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @param {number} k
 * @return {ListNode}
 */

// 先找到  k1 第一组
var reverseKGroup = function (head, k) {
  let temp = head;

  let i = 0;
  let tempArr = [];

  let res = null,
    resTemp = res;

  while (temp !== null) {
    i++;

    tempArr.push(temp.val);

    if (i === k) {
      i = 0;

      for (let j = k - 1; j >= 0; j--) {
        if (res === null) {
          res = new ListNode(tempArr[j]);
          resTemp = res;
        } else {
          resTemp.next = new ListNode(tempArr[j]);
          resTemp = resTemp.next;
        }
      }
      tempArr = [];
    }

    temp = temp.next;
  }

  const tempArrLen = tempArr.length;

  if (i !== 0) {
    for (let x = 0; x < tempArrLen; x++) {
      resTemp.next = new ListNode(tempArr[x]);
      resTemp = resTemp.next;
    }
  }

  return res;
};
