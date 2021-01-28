/**
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 *
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 *
 * 输入：lists = []
 * 输出：[]
 *
 * 输入：lists = [[]]
 * 输出：[]
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const len = lists.length;

  const arr = [];

  // 将链表拆分成 [1,1,1,]
  for (let i = 0; i < len; i++) {
    var n = lists[i];
    let t = n;

    if (!t) continue;

    while (t && t.val !== undefined) {
      arr.push(t.val);
      t = t.next;

      if (t && !t.next) {
        arr.push(t.val);
        break;
      }
    }
  }

  console.log(arr);

  // 排序
  const arrSort = arr.sort((a, b) => a - b);

  let t = null,
    res = null,
    x = 0;
  const arrLen = arrSort.length;

  // 将排序后的数组 生成新的链表
  while (x < arrLen) {
    const d = arrSort[x];

    if (!t) {
      res = new ListNode(d);
      t = res;
    } else {
      t.next = new ListNode(d);
      t = t.next;
    }
    x++;
  }

  return res;
};
