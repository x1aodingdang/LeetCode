/* 
给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

进阶：你可以实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案吗？

示例 1：

输入：nums = [1,2,0]
输出：3
示例 2：

输入：nums = [3,4,-1,1]
输出：2
示例 3：

输入：nums = [7,8,9,11,12]
输出：1
 

提示：

0 <= nums.length <= 300
-231 <= nums[i] <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/first-missing-positive
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let i = 1;
  const len = 300;
  // 因为1是最小的正整数   nums 最大的长度是300    
  // 那就从 1 开始 如果1存在 nums 中 则继续循环
  //        2
  //        3
  //        4
  //        ...
  while (i < len) {
    if (!nums.includes(i)) {
      return i;
    }
    i++;
  }
};
