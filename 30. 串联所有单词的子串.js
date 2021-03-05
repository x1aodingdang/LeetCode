/* 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

 

示例 1：

输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。
示例 2：

输入：
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
输出：[]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

//
var findSubstring = function (s, words) {
  if (words.length === 0) {
    return [];
  }

  const wordLen = words[0].length;
  const sLen = s.length;

  if (wordLen > sLen) {
    return [];
  }

  let dict = "";

  for (var _s of words) {
    dict += `${_s} `;
  }
  let log = dict;
  const dictLen = dict.length;

  console.log(dict);

  let i = 0,
    j = 0,
    t = null;
  const res = [];
  const sTotlaLen = wordLen * words.length;

  while (i < sLen) {
    const iNextIndex = i + wordLen;

    const _s = s.substr(i, wordLen);

    if (sLen - i < sTotlaLen) {
      console.log(s, i);
      break;
    }

    if (dict.includes(_s)) {
      j = iNextIndex;

      log = dict;

      log = log.replace(_s, "");

      t = i;

      while (true) {
        const _s = s.substr(j, wordLen);
        // console.log("i", i, "log", log, "_s", _s);

        if (_s.length > 0 && log.includes(_s)) {
          log = log.replace(_s, "");
        } else {
          break;
        }

        j += wordLen;
      }

      log = log.replace(/ /g, "");
      log.length === 0 && res.push(t);
    }

    // break;
    // i += wordLen;
    i++;
  }
  return res;
};

// console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])); // [6,9,12]

// console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
// console.log(
//   findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
// );
// console.log(
//   findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
// );
// [8]

console.log(
  findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
    "fooo",
    "barr",
    "wing",
    "ding",
    "wing",
  ])
);

// [13]
