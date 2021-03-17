/* 

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length;
  if (len === 0) return [-1, -1];

  let i = 0;

  const res = [-1, -1];
  let flag = false;

  while (i < len) {
    const f = target === nums[i];

    // 先找到 开始位置
    if (!flag && f) {
      res[0] = i;
      res[1] = i; // 防止 i 是最后一个 即 i === len - 1
      flag = true; // 开始找最后一个
      i++;
      continue;
    }
    // 开始找最后一个
    if (flag) {
      if (!f) { // 由于 是 升序排序  如果下一个不相等  那就结束位置就是 i - 1
        res[1] = i - 1;
        return res;
      } else { // 如果 相等  将 i 先添加进来  也是防止 i 为最后一个  即 i === len - 1
        res[1] = i;
        // return res; // but  不能直接返回 考虑 [3,3,3] 解构
      }
    }
    i++;
  }

  return res;
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange([], 0));
// console.log(searchRange([1], 0));
// console.log(searchRange([0], 0));
console.log(searchRange([2, 2], 2));
