/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  if (len === 0) return [];
  let res = [],
    i = 0;

  while (i < len - (k - 1)) {
    const d = nums[i];

    let tempI = i,
      temp = d;

    // tres = [];
    while (tempI < i + k) {
      const n = nums[tempI];
      // tres.push(n);
      if (n > temp) {
        temp = n;
      }
      tempI++;
    }
    // console.log(tres);
    res.push(temp);

    i++;
  }

  console.log(res);

  return res;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
// [3,3,5,5,6,7]
