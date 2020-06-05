/* 15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
] */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 先暂时放一放哈哈哈  311 / 313 个通过测试用例 超时难顶哦
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  let set = new Set(nums),
    _nums = new Set(),
    len = nums.length,
    res = [];

  for (let i = 0; i < len - 1; i++) {
    const a = nums[i];

    for (let j = i + 1; j < len; j++) {
      const b = nums[j],
        target = 0 - (a + b),
        copyNum = [].concat(nums);
      copyNum.splice(i, 1);
      copyNum.splice(j - 1, 1);

      let index = copyNum.indexOf(target);
      if (index !== -1) {
        // if (set.has(target)) {
        const _sort = [a, b, target].sort();
        const _arr = _sort.join("");

        if (_nums.has(_arr)) continue;

        _nums.add(_arr);
        res.push(_sort);
      }
    }
  }

  return res;
  // 还是要过滤相同的 结果
};
// 又超时了  我tm 怀疑了
/* var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let set = new Set(nums),
    _nums = new Set(),
    len = nums.length,
    res = [];

  for (let i = 0; i < len - 1; i++) {
    const a = nums[i];

    for (let j = i + 1; j < len; j++) {
      const b = nums[j],
        target = 0 - (a + b),
        copyNum = [].concat(nums);
      copyNum.splice(i, 1);
      copyNum.splice(j - 1, 1);

      let index = copyNum.indexOf(target);
      if (index !== -1) {
        // if (set.has(target)) {
        const _sort = [a, b, target].sort();
        const _arr = JSON.stringify(_sort);

        if (_nums.has(_arr)) continue;

        _nums.add(_arr);
        res.push(_sort);
      }
    }
  }

  return res;
  // 还是要过滤相同的 结果
}; */
/* var threeSum = function (nums) {
  nums = nums.sort();
  const set = new Set(nums);
  let res = [];
  let str = "";
  //   const _nums = [].concat(nums);
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // 找到   0 - ( i + j  )
      let num = 0 - (nums[i] + nums[j]);
      let index = nums.lastIndexOf(num);

      if ((index > j && nums[i] + nums[j] + num) === 0) {
        //   if ((set.has(num) && nums[i] + nums[j] + num) === 0) {
        // _nums.splice(index, 1, "");
        const _res = [nums[i], nums[j], num];
        let _str = _res.join(",");
        if (str.indexOf(_str) === -1) {
          str += _str;
          str += "  ";
          res.push(_res);
        }
      }
    }
  }
  console.log(str);
  return res;
  // 还是要过滤相同的 结果
}; */
// console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
console.log(
  threeSum([
    -13,
    5,
    13,
    12,
    -2,
    -11,
    -1,
    12,
    -3,
    0,
    -3,
    -7,
    -7,
    -5,
    -3,
    -15,
    -2,
    14,
    14,
    13,
    6,
    -11,
    -11,
    5,
    -15,
    -14,
    5,
    -5,
    -2,
    0,
    3,
    -8,
    -10,
    -7,
    11,
    -5,
    -10,
    -5,
    -7,
    -6,
    2,
    5,
    3,
    2,
    7,
    7,
    3,
    -10,
    -2,
    2,
    -12,
    -11,
    -1,
    14,
    10,
    -9,
    -15,
    -8,
    -7,
    -9,
    7,
    3,
    -2,
    5,
    11,
    -13,
    -15,
    8,
    -3,
    -7,
    -12,
    7,
    5,
    -2,
    -6,
    -3,
    -10,
    4,
    2,
    -5,
    14,
    -3,
    -1,
    -10,
    -3,
    -14,
    -4,
    -3,
    -7,
    -4,
    3,
    8,
    14,
    9,
    -2,
    10,
    11,
    -10,
    -4,
    -15,
    -9,
    -1,
    -1,
    3,
    4,
    1,
    8,
    1,
  ])
);
// console.log(threeSum([0, 0, 0]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([-1, 0, 1, 0]));
// console.log(threeSum([3, -2, 1, 0]));
// [-1, 0, 1, 2, -1, -4]，

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 太low🐔了 过时间了
 */
/* var threeSum = function (nums) {
    let res = [];
    //   const _nums = [].concat(nums);
    for (let i = 0, len = nums.length; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        // 找到   0 - ( i + j  )
        let num = 0 - (nums[i] + nums[j]);
        let index = nums.lastIndexOf(num);
        if ((index > j && nums[i] + nums[j] + num) === 0) {
          // _nums.splice(index, 1, "");
          res.push([nums[i], nums[j], num]);
        }
      }
    }
  
    // 还是要过滤相同的 结果
  
    
    let re = res.map((v) => {
      return v
        .sort((a, b) => {
          return a - b;
        })
        .join(",");
    });
    // .filter((v) => {});
    console.log(re, Array.from(new Set(re)));
    //   return res;
    return Array.from(new Set(re)).map((v) => {
      return v.split(",");
    });
  }; */
